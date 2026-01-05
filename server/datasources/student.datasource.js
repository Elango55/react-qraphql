import fetch from "node-fetch";

const BASE_URL = "http://localhost:5000/students";

export const StudentDataSource = {
  async getStudents({ page, limit, search }) {
    const safePage = page ?? 1;
    const safeLimit = limit ?? 5;
    const safeSearch = search ?? "";

    const params = new URLSearchParams({
      _page: safePage,
      _limit: safeLimit,
      q: safeSearch,
    });

    const res = await fetch(`${BASE_URL}?${params}`);
    const data = await res.json();

    const totalCountHeader = res.headers.get("x-total-count");
    const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

    return {
      data,
      page: safePage,
      limit: safeLimit,
      totalCount, // ✅ now available for frontend
    };
  },

  async addStudent(student) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return res.json();
  },

  async deleteStudent(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return true;
  },

  async updateStudent(id, student) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return res.json();
  },
};
