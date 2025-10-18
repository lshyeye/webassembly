// 修复WebAssembly模块加载和导出功能
// 定义实例化函数
async function instantiate(module, imports = {}) {
  // 根据module类型决定使用哪种实例化方式
  const { exports } = await WebAssembly.instantiate(module, imports);
  const memory = exports.memory || imports.env.memory;
  return exports;
}

/* export const {
  add,
  sub,
  memory
} = await (await (url) => instantiate(
  // fetch('main.wasm')
  // 浏览器： WebAssembly.compileStreaming(fetch('main.wasm'))
  // Node： WebAssembly.compile(fs.readFileSync('main.wasm'))
  await (async () => {
    // 判断当前环境是 node 或者 bun
    const isNodeOrBun = typeof process !== 'undefined' && process.version !== null
    if (isNodeOrBun) {
      // return WebAssembly.compile(buffer)
      // 标准的 JavaScript 全局对象访问器，它提供了一种在任何 JavaScript 环境中访问全局对象的统一方式
      // 跨环境兼容性 ：它可以在浏览器、Node.js、Web Workers 等任何 JavaScript 运行环境中正常工作
     
     
      const fs = await import('fs/promises');
     
      return  globalThis.WebAssembly.compile(await fs.readFile(url))
    } else {
      // 浏览器环境
      // return WebAssembly.compileStreaming(fetch('main.wasm'))
      return  globalThis.WebAssembly.compileStreaming(globalThis.fetch(url))
    }
  })
))(new URL('./main.wasm', import.meta.url));
 */
export const { memory, add } = await (async (url) => 
  instantiate(
    await (async () => {
      const isNodeOrBun =
        typeof process !== 'undefined' &&
        process.versions !== null &&
        (process.versions.node !== null || process.versions.bun !== null);
      if (isNodeOrBun) {
        return globalThis.WebAssembly.compile(
          await (await import('node:fs/promises')).readFile(url)
        );
      } else {
        return await globalThis.WebAssembly.compileStreaming(
          globalThis.fetch(url)
        );
      }
    })(),
    {}
))(new URL('./main.wasm', import.meta.url));
