import { useParams } from "react-router-dom"
import ArticleService from "../service/article"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticleDetailFailure, getArticleDetailSrart, getArticleDetailSuccess } from "../slice/article"
import moment from "moment"
import { Loader } from "../ui"

const ArticleDetail = () => {
    const {slug} =useParams()
    const dispatch= useDispatch()
    const {articleDetail, isLoading}= useSelector(state=>state.article)
    useEffect(()=>{
        const getArticleDetail= async ()=>{
            dispatch(getArticleDetailSrart())
            try {
                const response=await ArticleService.getArticleDetail(slug)
                dispatch(getArticleDetailSuccess(response.article))
                console.log(response)
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }   
        getArticleDetail()
    },[slug])
  return (isLoading ? <Loader/> : articleDetail !== null && (
    <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
        <p className="col-md-8 fs-4">{articleDetail.description}</p>
            <p className="text-muted">
                <span className="fw-bold">Created at:</span>
                {moment(articleDetail.createdAt).format('DD MMM, YYYY')}
            </p>
     <div className="col-lg-4 ">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h2 className="fw-normal text-capitalize">{articleDetail.author.username}</h2>
        <p>{articleDetail.author.bio}</p>
      </div>
            <div>{articleDetail.body}</div>
        </div>
    </div>
  )
  )
}

export default ArticleDetail