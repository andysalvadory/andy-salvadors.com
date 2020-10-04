import {
  getGeoCode,
  formattedDistance,
  RecentSearchesProvider,
  ClockIcon,
  // @ts-ignore
} from 'fake-helper-utilities';
import * as React from 'react';
import Text from '../Text';
import {
  GooglePlacesAddressInput,
  GooglePlacesAddressInputProps,
} from './AddressInput.part1.poc';
import Input from '../Input';

/**
 * In the previous part we established 3 distinct pieces serving different goals, Provider => Adapter => UI.
 * When we combine them together we get the component we wanted, a google places powered address input component.
 *
 * However, having this component is not the end of the story, rather then just the beginning, in this part we will explore
 * what types of products (other components) we can build with it, and what we will need to change in order to "extend"
 * it without compromising the separation of concerns guided us so far.
 *
 * In the following examples, i will use `<GooglePlacesAddressInput/>` component defined in the end of `part1`, this
 * is an AddressInput component pre-wired to GooglePlaces APIs and upon selection provides to the user the "suggestion"
 * object returned from the service.
 *
 * Note: In each example we will try to add only one additional capability (feature) to the current implementation and by
 * that gaining a new "product", this in done intentionally and will be explained in more details later.
 * */

/**
 * Example 1 - `<GoogleAddressInput/>`
 * The GooglePlaces service we used so far provides an api for address autocomplete purposes, this means that the info
 * it provides for each address is minimal and not very useful coming to build an app with it.
 * In this example we will show how we create a new component that uses `<GooglePlacesAddressInput/>` internally and
 * combined with the Google GeoCode Service returns the full address geocode object.
 * */
const GoogleAddressInput: React.FunctionComponent<GooglePlacesAddressInputProps> = ({
  onSelect,
  ...restProps
}) => {
  const handleSelect = async suggestion =>
    onSelect(await getGeoCode(suggestion)); // Assuming we have this method available for us
  return <GooglePlacesAddressInput onSelect={handleSelect} {...restProps} />;
};
/**
 * In this example we see that <GoogleAddressInput/> "adopts" the propTypes api of <GooglePlacesAddressInput/>
 * and just taking over the `onSelect` handling in order to perform the lookup request for the geoCoded data.
 * This means that we gained all the customizations capabilities of the lower level component while we can
 * keep our focus on the added value this component provides.
 * */
/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * Example 2 - `<GooglePlacesAddressInputWithDistanceProps/>`
 * This one is a bit more tricky, we want to display the distance of my device from each "suggestion".
 *
 * In order to achieve this we will need accomplish two things:
 * 1. Indicate to the location service provider that we are interested in this type of information and provide our device
 * location as part of the initialization of the service or the request for suggestions (depends on the service requirements).
 * 2. Interfere with the way <GooglePlacesAddressInput/> renders its `options`, making sure it renders the new provided
 * information in the option.
 * */
const GooglePlacesAddressInputWithDistance: React.FunctionComponent<GooglePlacesAddressInputProps> = ({
  // @ts-ignore
  withDistance,
  ...restProps
}) => {
  return (
    <GooglePlacesAddressInput
      {...restProps}
      // This answers the first requirement, notifying to the location service provider to fetch this data as well.
      // Note that this it is essentially a new prop aimed for of the internal <GooglePlacesServiceProvider/> and we are
      // counting on the component to pass it down correctly.
      // @ts-ignore
      withDistance
      // This answers the second requirement, allowing the modification of the options props according to the provided data.
      // Note that this is essentially a new prop of the internal <AddressInput/> component and we are counting on the
      // component to pass it down correctly.
      optionMiddleware={suggestion => ({
        suffix:
          (suggestion.distance_in_meters && (
            <Text>{formattedDistance(suggestion.distance_in_meters)}</Text>
          )) ||
          '',
      })}
    />
  );
};
/**
 * Looking on the code above we can see how our new component <GooglePlacesAddressInputWithDistance/> is only dealing with
 * adding this new capability to the final product and nothing more.
 * While it follows successfully the "isolation of concerns" principle, we can already see that we needed to "modify" the
 * Provider and the UI components in order to add this new capability (supporting `withDistance` & `optionRender`) and
 * we need a 3rd component to wire everything together properly.
 * This can be a bad sign moving forward with this practice since most products feature more than one capability and we
 * want to make sure we end up with code that is easy to maintain and not the other way around.
 *
 * The main thing we can learn from this case is that we shouldn't mix different capabilities that are based on a single
 * provider, especially when not all has access to the provider initialization.
 * It might be better to add the distance capability to the layer that handles the provider data directly.
 * */

/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * Example 3 - <GooglePlacesAddressInputWithRecentSearches/>
 * Adding to the top of the "suggestion" list the last X addresses that the user searched.
 *
 * Since our main focus here is how we add new capabilities and not how we implement them we will just assume we have a
 * <RecentSearchesProvider/> for managing the list of last searches.
 *
 * In order to achieve our goal, we will need to accomplish three things:
 * 1. Initialize a `<RecentSearchesProvider/>` by passing it the data it needs.
 * 2. Register to the `onSelect` callback in order to notify the provider upon a user selection.
 * 3. Pass down to the component the list of options holding the recent searches
 * */
const GooglePlacesAutoCompleteInputWithRecentSearches = ({
  numOfRecentSearches,
  onSelect,
  ...restProps
}) => (
  // this takes care of the 1st requirement, initializing the provider
  <RecentSearchesProvider numOfRecentSearches={numOfRecentSearches}>
    {({ recentSearches, addSearch }) => {
      const handleSelect = async suggestion => {
        await addSearch(suggestion);
        onSelect(suggestion);
      };
      return (
        <GooglePlacesAddressInput
          {...restProps}
          // This one is the 2nd requirement, registering for onSelect
          onSelect={handleSelect}
          // This is the 3rd one, we create the list of additional options we want
          // @ts-ignore
          options={recentSearches.map(search => (
            // @ts-ignore
            <GooglePlacesAddressInput.Option
              {...search}
              prefix={
                <Input.IconAffix>
                  <ClockIcon />
                </Input.IconAffix>
              }
            />
          ))}
        />
      );
    }}
  </RecentSearchesProvider>
);
/**
 * In this example we see that we need to expose yet another prop in our `<GooglePlacesAddressInput/>` component, the
 * `options` array, which is part of the `AddressInputContentProps` interface that wasn't exposed until now.
 * This is another red flag for the need to find a better solution for our extendability problem.
 * If we will need to keep on "modifying" our internal parts to fit more composition capabilities we in fact didn't
 * reach our end goal of adding these capabilities in an isolated way.
 * In the next part we will try to address exactly that by trying to identify a pattern that can accommodate these types
 * of additions.
 */

/**
 * Appendix.
 *
 * List of products
 * 1. Show last 5 searches.
 *    * Listen to `onSelect` changes and getting from the event the minimum set of data required for displaying it later
 *    as a "recent option"
 *    * Pass down an "options" array that will contain a `<ListItemSection/>` and the recent-options objects.
 * 2. Show a "My current location" option.
 *    * Pass down an "options" array with the action-option using the `<ListItemAction/>` component.
 *    * Listen to `onSelect` changes and identify the selection of our action-option.
 *    * Extract from the browserAPI the current LatLong info and pass it as the selected option to the Location Provider.
 *    (Needs further investigation)
 * 3. Shows a "distance" value in each option according to my current location:
 *    * Needs to notify the LocationProvider that we expect results to contain the `distance` value
 *    * Need to be able to modify the "suggested" options and to add the `distance` value as `suffix` (We should consider
 *    adding this to the AddressInput.Option implementation)
 * */
