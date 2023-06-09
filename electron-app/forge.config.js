/*
 * @Author: zhouyang
 * @Date: 2023-05-25 09:45:52
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-06-01 17:09:04
 * @FilePath: \electron-template\electron-app\forge.config.js
 * @Desc: 描述
 */
module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  // 打哪些格式的包
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  // 往哪些平台发布更新包
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'LibraHeresy',
          name: 'electron-template'
        },
        prerelease: false,
        draft: true,
      }
    }
  ],
};
