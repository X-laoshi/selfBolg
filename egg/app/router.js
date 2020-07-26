'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.find);
  router.post('/regist', controller.regist.echo);
  router.post('/change', controller.change.change);
  // router.resources('/regist', controller.regist.index);
};
