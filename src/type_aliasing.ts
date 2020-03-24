type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type Directory<T> =
  | {
      tag: "Dir";
      value: {
        name: string;
        contents: Directory<T>[];
      };
    }
  | {
      tag: "File";
      value: {
        name: string;
      };
    };

let count_files = function(homeDir: Directory<any>): number {
  switch (homeDir.tag) {
    case "Dir": {
      return homeDir.value.contents.map(count_files).reduce((a, b) => a + b);
    }
    case "File": {
      return 1;
    }
  }
};

const myDir: Directory<string> = {
  tag: "Dir",
  value: {
    name: ".",
    contents: [
      { tag: "File", value: { name: "file1.txt" } },
      {
        tag: "Dir",
        value: {
          name: "dir1",
          contents: [
            { tag: "File", value: { name: "file2.txt" } },
            { tag: "File", value: { name: "file3.txt" } },
            { tag: "File", value: { name: "file4.txt" } }
          ]
        }
      }
    ]
  }
};

console.log(count_files(myDir));
