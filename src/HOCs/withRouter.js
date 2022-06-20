import { useParams, useNavigate } from "react-router-dom";

function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    const navigate = useNavigate();
    return <Children {...props} navigate={navigate} match={match} />;
  };
}
export default withRouter;
