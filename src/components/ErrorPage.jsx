import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // Lấy thông tin lỗi từ hook

  return (
    <div>
      <h1>Đã xảy ra lỗi!</h1>
      {/* Hiển thị thông báo lỗi */}
      <p>{error.message || "Lỗi không xác định."}</p>

      {/* Nếu có thông tin chi tiết lỗi, hiển thị thêm */}
      {error.details && (
        <p>
          <strong>Chi tiết lỗi:</strong> {error.details}
        </p>
      )}

      {/* Hiển thị stack trace (chỉ trong môi trường phát triển) */}
      {error.stack && <pre>{error.stack}</pre>}
    </div>
  );
};

export default ErrorPage;
