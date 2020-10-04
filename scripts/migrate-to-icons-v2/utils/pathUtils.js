const ICONS_FOLDER = 'new-icons';

const getNewImportPath = (value, { oldIconName, newIconData } = {}) => {
  const paths = {
    commonSrcPath: `/src/Icons/dist/components/${oldIconName}`,
    commonPath: `/Icons/dist/components/${oldIconName}`,
    indexSrcPath: `/src/Icons/dist/index`,
    indexPath: `/Icons/dist/index`,
    rootSrcPath: `/src/Icons`,
    rootPath: `/Icons`,
  };
  const isWSRMigration = process.env.MIGRATION === 'wix-style-react';
  const newIconName = newIconData && newIconData.value;
  const prefix = newIconData && newIconData.type === 'system' ? 'system/' : '';
  const newIconPath = `${ICONS_FOLDER}/${prefix}${newIconName}`;

  if (value.endsWith(paths.indexSrcPath)) {
    return isWSRMigration
      ? value.replace(paths.indexSrcPath, `/${ICONS_FOLDER}`)
      : `wix-style-react/${ICONS_FOLDER}`;
  } else if (value.endsWith(paths.indexPath)) {
    return isWSRMigration
      ? value.replace(paths.indexPath, `/${ICONS_FOLDER}`)
      : `wix-style-react/${ICONS_FOLDER}`;
  } else if (value.endsWith(paths.rootSrcPath)) {
    return isWSRMigration
      ? value.replace(paths.rootSrcPath, `/${ICONS_FOLDER}`)
      : `wix-style-react/${ICONS_FOLDER}`;
  } else if (value.endsWith(paths.rootPath)) {
    return isWSRMigration
      ? value.replace(paths.rootPath, `/${ICONS_FOLDER}`)
      : `wix-style-react/${ICONS_FOLDER}`;
  } else if (value.endsWith(paths.commonSrcPath)) {
    return isWSRMigration
      ? value.replace(paths.commonSrcPath, `/${newIconPath}`)
      : `wix-style-react/${newIconPath}`;
  } else if (value.endsWith(paths.commonPath)) {
    return isWSRMigration
      ? value.replace(paths.commonPath, `/${newIconPath}`)
      : `wix-style-react/${newIconPath}`;
  }
};

module.exports.getNewImportPath = getNewImportPath;
