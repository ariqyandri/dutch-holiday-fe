export class DataService {
  constructor(private data: any) {}
  getAllIds() {
    return this.data.map(({ id }: { id: number }) => {
      return id;
    });
  }
  getAll() {
    return this.data;
  }
  get(id: any) {
    return this.data.find((p: any) => {
      return p.id === parseInt(id);
    });
  }
}
