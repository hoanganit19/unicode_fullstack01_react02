import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const withRouter = (ParentComponent) => (props) => {
    const params = useParams(); //Hook có sẵn => Chỉ dùng được trong function
    const searchParams = useSearchParams(); //return về 1 array
    const navigate = useNavigate();
    return <ParentComponent {...props} params={params} search={searchParams} navigate={navigate}/>
}

export default withRouter;