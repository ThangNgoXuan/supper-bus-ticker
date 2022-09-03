import React, {useState, useCallback, useEffect} from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
    totalPage,
    marginPagesDisplayed = 2,
    pageRangeDisplayed = 3,
    pageCurrent,
    handleChangePage,
}) {
  const [pageActive, setPageActive] = useState(0);
  const handlePageClick = useCallback(
    (currentPage) => {
      const { selected } = currentPage;
      if (handleChangePage) {
        handleChangePage(selected + 1);
      }
      setPageActive(selected);
    },
    [handleChangePage]
  );

  useEffect(() => {
    setPageActive(pageCurrent ? pageCurrent - 1 : 0);
  }, [pageCurrent]);

  if (totalPage <= 1) {
    return null;
  }
  return (
    <div className="o-pagination">
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={totalPage}
        forcePage={pageActive}
        onPageChange={handlePageClick}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        containerClassName="main"
        breakClassName="page break"
        previousClassName="page"
        nextClassName="page"
        pageClassName="page pageLabel"
        activeClassName="active-page"
        pageLinkClassName="link-page"
        breakLinkClassName="link-page link-break"
        nextLinkClassName="link-page link-next"
        previousLinkClassName="link-page link-previous"
      />
    </div>
  );
}
