import { DropdownLayoutOption, DropdownLayoutProps } from '../DropdownLayout';
import * as React from 'react';

/**
 * This document is a summary of the thinking process i went through when i was faced with a task to create the
 * next version of WSR AddressInput component, an input component the can provide autocomplete suggestions for geo-location
 * addresses.
 */

/**
 * So let's start with what we had already defined, which is the visual specs of the new component (Zeplin).
 * Usually, this is not enough, in most of the times you will get to see there how the desired component should look like,
 * sometimes you will even get some "hints" for behaviour definitions and future capabilities.
 * But to be able to build a full product out of it we will need a better product definitions.
 * In our use case, since we had no product capacity at the time, we had to start with just that.
 *
 * At this point, you must be super careful when you are trying to convert your visual spec into a technical spec
 * by avoiding including into it any business logic and decision making. The way i like to think of it is like i am
 * building a marionette, i need it to be able to perform the "movements" required but i am not it's puppeteer.
 */

/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * <AddressInput/>
 * This is our "marionette" component, it's responsibility is to follow the product visual definitions and behaviour
 * guidelines, this way any consumer that wishes to build it's own address lookup solution will be able to reuse it and
 * only take care of his specific use cases.
 *
 * In the following suggested api, we can see our props divided into 3 different groups, we will see later how this
 * can provide us clarity when composing with this component... */
class AddressInput extends React.PureComponent<AddressInputProps> {} // This can be a Function Component as well using hooks

interface AddressInputProps
  extends AddressInputBaseProps,
    AddressInputContentProps,
    AddressInputAppearanceProps {}
// The bare minimum api we want to expose to our users that provides a usable product (required)
interface AddressInputBaseProps {
  dataHook?: string;
  className?: string;
  initialValue?: string;
  onChangeDebounceWait?: number;
  onSelect?(option: DropdownLayoutProps['onSelect']): void;
}
// Input and Options related props for managing internal values and getting updates upon changes.
interface AddressInputContentProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
  options?: DropdownLayoutOption[];
  status?: 'loading' | 'error' | 'warning';
}
// Appearance related props, defining the component appearance & layout
interface AddressInputAppearanceProps {
  size?: 'small' | 'medium' | 'large';
  roundInput?: boolean;
  optionsLayout?: 'single-line' | 'double-line';
  showOptionsIcon?: boolean;
}
/**
 * Note, this component can be implemented in many ways, in this case we will probably use InputWithOptions internally to
 * gain the basic input+options behaviour done for us (hence some of the prop names are similar), this doesn't mean that
 * this component must mimic everything else of the internal component, we need to make sure that the tools we use to
 * compose this component doesn't enforce us to take decisions that we wouldn't take otherwise.
 * The component abstraction must stand by itself.
 * */

/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * So we used the spec we got to define our first building block, however, this is not enough in order to build the
 * product we were requested.
 * Luckily, we don't need a detailed spec to realize that this component will need to get it's info from some kind of
 * location service provider, Google Places (https://cloud.google.com/maps-platform/places) is a good use case since
 * it is what we currently use in our old component and probably we will need to support it in the new one as well.
 * Let see how such a provider can look like... */

/**
 * <GooglePlacesServiceProvider/>
 * Google Places is a service that provides autocomplete suggestions for a given user input, we want to encapsulate this
 * service into a provider component <GooglePlacesServiceProvider> which we will later use with our new <AddressInput/>
 * component to create the full <GoogleAddressInput/> solution.
 *
 * Note: This api is inspired by a 3rd-party hook named `use-places-autocomplete` (just in a render-props fashion).
 * You don't really have to understand it to continue reading, i only placed it here so we will have a "mock" example
 * to an api that "someone else" defined for us and it is out of our control.
 * This also "hints" us that in the final solution we will need to be able to support this use case, we will see how later.
 * (To read more about this specific one you can go to https://github.com/wellyshen/use-places-autocomplete)
 * */
class GooglePlacesServiceProvider extends React.PureComponent<
  GooglePlacesServiceProviderProps
> {}

interface GooglePlacesServiceProviderProps {
  initialValue?: string;
  children?(props: ServiceProviderProps): JSX.Element;
}
interface ServiceProviderProps {
  value?: string;
  setValue?(value: string): void;
  suggestions?: {
    data: Suggestion[];
    status: 'OK' | 'NOT_FOUND' | 'ZERO_RESULTS';
  };
  clearSuggestions?(): void;
}
interface Suggestion {} // This is the raw "suggestion" object returned from the google places service, it holds minimal
// information about the suggestion location just so we will be able to render UI out of it.
// We will include it as part of the provided value upon `onSelect`
// It is untyped here just to reduce noise.

/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * So far we manged to define two building blocks required for our solution, one is the UI-Layer component <AddressInput/>
 * and the second is the ServiceProvider component <GooglePlacesServiceProvider/>.
 * It is easy to see that these components don't "speak" the same language, the provider is not familiar with the
 * UI-Layer API and vise-versa.
 *
 * GooglePlacesService  -/->  AddressInput (service-api !== component-props)
 *
 * Therefore, we will need an adapter to make the two talk to each other.
 * Clarification, when speaking about adapters i will refer to function components that receive one type of api signature
 * and return a different type of api-signature by applying transformations to the received props.
 * These adapters should be pure, hence, shouldn't hold any state or perform side-effects.
 */

/**
 * <GooglePlacesServiceAdapter/>
 * a component that should act as a bridge between <GooglePlacesServiceProvider/> and <AddressInput/> components.
 * it should be familiar with the api of both ends and make sure that it is fulfilled correctly by receiving all the
 * the relevant data and handlers from the service provider and returning props that are aligned with UI-Layer props.
 *
 * Suggested api... */
class GooglePlacesServiceAdapter extends React.PureComponent<AdapterProps> {}

interface AdapterProps extends ServiceProviderProps {
  children?(props: AddressInputContentProps): JSX.Element;
}
/** Note that the `AddressInputAppearanceProps` are not part of the renderChildren signature, hence this is not the
 * responsibility of the adapter, we should be providing them to the component independently. */

/*---------------------------------------------------------------------------------------------------------------------*/

/** <GooglePlacesAddressInput/>
 * Let's put everything we defined so far together.
 * This component should fulfil our first milestone in the end product, an <AddressInput/> component that is
 * powered by Google Places. */
export interface GooglePlacesAddressInputProps
  extends AddressInputBaseProps,
    AddressInputAppearanceProps,
    Omit<GooglePlacesServiceProviderProps, 'children'> {}

export const GooglePlacesAddressInput: React.FunctionComponent<GooglePlacesAddressInputProps> = ({
  initialValue,
  ...restAddressInputProps
}) => (
  <GooglePlacesServiceProvider initialValue={initialValue}>
    {serviceProviderProps => (
      <GooglePlacesServiceAdapter {...serviceProviderProps}>
        {addressInputContentProps => (
          <AddressInput
            {...addressInputContentProps}
            {...restAddressInputProps}
          />
        )}
      </GooglePlacesServiceAdapter>
    )}
  </GooglePlacesServiceProvider>
);
/**
 * This component is in fact taking the responsibility to implement the full <AddressInput/> & <GooglePlacesServiceProvider/>
 * props interface.
 * `AddressInputBaseProps`, `AddressInputAppearanceProps` & `GooglePlacesServiceProviderProps` are being exposed outside
 * for the consumer to provide the desired values while the `AddressInputContentProps` is being served internally by our
 * Provider/Adapter and is not open for modification from outside, we will see later how we can still provide "extending"
 * capabilities that can modify these props for additional features.
 * Now, i can see why the code above can be eye pleasing to some while mind bending to others, it is just for
 * demonstration purposes to show the separation of concerns between all of our building blocks and the props
 * composition.
 * We can always consolidate the Provider/Adapter into a single component <GooglePlacesProvider/> resulting a code that
 * would look like...

const GooglePlacesAddressInput: React.FunctionComponent<GooglePlacesAddressInputProps> = ({
  initialValue,
  ...restAddressInputProps
}) => (
  <GooglePlacesProvider initialValue={initialValue}>
    {addressInputContentProps => (
      <AddressInput {...addressInputContentProps} {...restAddressInputProps} />
    )}
  </GooglePlacesProvider>
);
/*---------------------------------------------------------------------------------------------------------------------*/

/**
 * To conclude, we manged to split our problem into three parts, each one has a clear definition of responsibility
 * and a declared way to connect with the others, Provider -> Adapter -> UI.
 * The resulting component can display an input to the screen and provide auto complete suggestions for addresses
 * provided from the Google Places api.
 * In the next part we will see what type of products we can build with it and which additional building blocks we will
 * need to implement to accommodate the new needs...
 */
