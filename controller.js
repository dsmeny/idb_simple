async function doDatabaseStuff() {
  return await idb.openDB("key-store", 1, {
    upgrade(db) {
      db.createObjectStore("messages");
    },
  });
}

export const get = async (key) => {
  const db = await doDatabaseStuff();
  return await db.get("messages", key);
};

export const set = async (key, val) => {
  const db = await doDatabaseStuff();
  return await db.put("messages", key, val);
};

export const del = async (key) => {
  const db = await doDatabaseStuff();
  return await db.delete("messages", key);
};

export const clear = async () => {
  const db = await doDatabaseStuff();
  return await db.clear("messages");
};

export const keys = async () => {
  const db = await doDatabaseStuff();
  return await db.getAllKeys("messages");
};

export const values = async () => {
  const db = await doDatabaseStuff();
  return await db.getAll("messages");
};
