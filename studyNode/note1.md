# webAssembly 极端性能优化方案
webAssembly（wasm）， 可以使用 C，C++，Rust，Go 编译成 wasm，然后再浏览器中进行运行，二进制格式
### 主要使用的场景
1. 非常复杂的 计算，计算密集型任务， rust， c 等然后在浏览器端进行运行
2. 图形渲染，skia（2D 库） + webassembly  = canvaskit
3. 音视频剪辑，webcodes， FFmpeg （这个是脚本，如何在浏览器端进行执行，wasm）
4. 高性能渲染库，3D， webGis， rust（photon），skia
### 简单入门
1. 代码  (ts, go, rust, c, c++)
2. 将代码编译为 wasm (ts -> assemblyscript 来编译， asc), (rust -> wasm-pack 来编译 )
3. 在前端加载 wasm (release.js)
4. 调用 wasm 提供的方法 (index.html) 中使用提供的方法
可以使用 TypeScript 编写 wasm