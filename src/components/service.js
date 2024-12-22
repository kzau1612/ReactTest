export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    const errorDetails = await response.json(); // Lấy chi tiết lỗi từ phản hồi
    throw new Error(`Lỗi tải bài viết: ${errorDetails.message || "Không thể lấy dữ liệu"}`);
  }
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users1");
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Lỗi tải người dùng: ${errorDetails.message || "Không thể lấy dữ liệu"}`);
  }
  return response.json();
};
