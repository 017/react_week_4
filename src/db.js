import PouchDB from 'pouchdb';

export default class DB {
  constructor(name) {
    this.db = new PouchDB('roster-appDB');
  }

  async getAllRosterEntries() {
    let allUsers = await this.db.allDocs({ include_docs: true });
    let users = {};

    allUsers.rows.forEach(el => users[el._id] = el.doc);

    return users;
  }

  async createRosterEntry(user) {
    user.createdAt = new Date();
    user.updatedAt = new Date();

    const result = await this.db.post({ ...user });
    return result;
  }

  async updateRosterEntry(user) {
    user.updatedAt = new Date();

    const result = await this.db.put({ ...user });
    return result;
  }

  async deleteRosterEntry(user) {
    await this.db.remove(user);
  }
}

// if (el.type === 'RosterEntry') {
// }