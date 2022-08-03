import { isAuth } from "../../helper/auth";
import { Navigate } from "react-router-dom";
import MainCard from "../../component/Element/MainCard";
import Main from "../../component/Navbar/Main";
import Frame from "../../component/Element/Frame";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { List } from "../../component/Menu/List";
const Studio = () => {
    const { url } = useParams()
    const [link, setLink] = useState('')

    useEffect(() => {
        getLink()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const getLink = () => {
        List.filter((item) => {
            if (item.item === url) {
                setLink(item.url)
            }
            return true
        })
    }
    return (
        <div>
            {isAuth() ? null : <Navigate to="/login" />}
            <Main>
                <div className=" bg-slate-200"></div>
                <MainCard>
                    <Frame link={link} />
                </MainCard>
            </Main>
        </div>
    );
}

export default Studio;