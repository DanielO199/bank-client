export class IPaginatedListParams {
  page: number = 1;
  limit: number = 25;
  sort_by?: string;
  sort_direction?: string;
  search?: string = "";

  constructor(page = 1, limit = 25) {
    this.page = page;
    this.limit = limit;
  }
}
