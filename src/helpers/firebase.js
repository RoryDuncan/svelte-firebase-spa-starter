/* global firebase */

const app = firebase.app();
const database = firebase.database();

export default {
  app: () => app,
  database: () => database
}