// We are trying to create a class and every class will have a container
function hashStringToInt(key, val) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % val;
}

class HashTable {
  constructor(size = 10) {
    this.data = new Array(size);
  }

  set(key, value) {
    let idx = hashStringToInt(key, this.data.length);
    if (this.data[idx]) {
      this.data[idx].push([key, value]);
    } else {
      this.data[idx] = [[key, value]];
    }
  }

  get(key) {
    const idx = hashStringToInt(key, this.data.length);

    if (!this.data[idx]) {
      return null;
    }

    return this.data[idx].find((x) => x[0] === key)[1];
  }
}

let map = new HashTable(20);

map.set("apple", 3);
console.log(map);
console.log(map.get("apple"));
