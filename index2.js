function hashStringToInt(key, length) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % length;
}

class HashTable {
  constructor(size = 10) {
    this.data = new Array(size);
  }

  set(key, value) {
    let idx = hashStringToInt(key, this.data.length);

    if (this.data[idx]) {
      this.data[idx].push(key, value);
    } else {
      this.data[idx] = [[key, value]];
    }
  }

  get(key) {
    let idx = hashStringToInt(key, this.data.length);

    if (!this.data[idx]) {
      return null;
    }

    return this.data[idx].find((x) => x[0] === key)[1];
  }
}

let table = new HashTable(20);
table.set("apple", 3);
console.log(table);
console.log(table.get("apple"));
table.set("tomato", 4);
console.log(table);
console.log(table.get("tomato"));
