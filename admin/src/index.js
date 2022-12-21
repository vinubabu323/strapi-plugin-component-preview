import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import getTrad from './utils/getTrad';


const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });

    app.customFields.register({
      name: "preview",
      pluginId: "componentpreview", // the custom field is created by a color-picker plugin
      type: "string", // the color will be stored as a string
      intlLabel: {
        id: getTrad("componentpreview.preview.label"),
        defaultMessage: "Component Preview",
      },
      intlDescription: {
        id: getTrad("componentpreview.preview.description"),
        defaultMessage: "Enter Field Name",
      },
      components: {
        Input: async () => import("./components/preview"),
      },
      options: {
        // declare options here
        base: [
          {
            sectionTitle: null,
            items: [
              {
                name: 'options.url',//name of an related field
                type: 'text',//input type
                intlLabel: {
                  id: getTrad('url.text'),
                  defaultMessage: 'Enter File Path',//label for the info field
                },
                description: {
                  id: getTrad('url.description'),
                  defaultMessage:
                    'Enter the image url.',//description for field
                },
                placeholder: {
                  id: getTrad('url.placeholder'),
                  defaultMessage: 'uploads/components/image.jpg',
                },
              },
            ],
          },
        ],


      },
    });



  },

  bootstrap(app) {
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
