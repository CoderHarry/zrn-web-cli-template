/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 * @format
 */
"use strict";

function createModuleIdFactory() {
  // 定义项目根目录路径
  const projectRootPath = `${process.cwd()}`;
  // path 为模块路径名称
  return path => {
    let moduleName = '';
    if(path.indexOf('node_modules\\react-native\\Libraries\\') > 0) {
        moduleName = path.substr(path.lastIndexOf('\\') + 1);
    } else if(path.indexOf(projectRootPath)==0){
        moduleName = path.substr(projectRootPath.length + 1);
    }

    moduleName = moduleName.replace('.js', '');
    moduleName = moduleName.replace('.png', '');
    moduleName = moduleName.replace('.jpg', '');
    moduleName = moduleName.replace(/\\/g, '_'); // 适配Windows平台路径问题
    moduleName = moduleName.replace(/\//g, '_'); // 适配macos平台路径问题

    return moduleName;
  };
}

module.exports = createModuleIdFactory;