import { Routes, Route } from 'react-router-dom'
import ArticleDetail from './containers/ArticleLIstDetailView'
import ArticleList from './containers/ArticleListView'
import Login from './containers/Login'

const BaseRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ArticleList />} />
                <Route path='/:id' element={<ArticleDetail />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default BaseRouter