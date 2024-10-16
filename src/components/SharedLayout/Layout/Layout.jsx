import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ accountType, children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const modalOpenParam = searchParams.get("modalOpen");

  //   if (modalOpenParam === "true") {
  //     setIsModalOpen(true);
  //   }
  // }, [location.search]);
  return (
    <div>
      <Header accountType={accountType} />
      {children}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  accountType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
