export default ({
  name, // action 的名字
  store, // store 实例
  args, // 调用这个 action 的参数
  after, // 在这个 action 执行完毕之后，执行这个函数
  onError, // 在这个 action 抛出异常的时候，执行这个函数
}: any) => {
  // 记录开始的时间变量
  const startTime = Date.now()
  console.log(store)
  console.log(name, "unsubscribe: name")
  console.log(args, "unsubscribe: args")

  // 如果 action 成功并且完全运行后，after 将触发。
  // 它将等待任何返回的 promise
  after((result: any) => {
    console.log(
      `Finished "${name}" after ${Date.now() - startTime
      }ms.\nResult: ${result}.`
    )
  })

  // 如果 action 抛出或返回 Promise.reject ，onError 将触发
  onError((error: any) => {
    console.warn(
      `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
    )
  })
}
