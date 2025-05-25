// React Pagination
import ReactPaginate from "react-paginate";

// Translation
import { useTranslation } from "react-i18next";

const PaginationList = ({ pageCount, getCurrentPage, currentPage }) => {
  const { t } = useTranslation();

  const handlePageClick = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const selectedPage = event.selected + 1;
    if (selectedPage <= 500) {
      getCurrentPage(selectedPage);
    }
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={t("Next")}
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      forcePage={currentPage}
      previousLabel={t("Previous")}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationList;
