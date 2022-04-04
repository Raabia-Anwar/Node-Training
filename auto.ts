interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
  //configure("automatic");
