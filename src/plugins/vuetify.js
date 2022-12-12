import Vue from 'vue';
import { colors } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.shades.black,
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
    },
  },
});
