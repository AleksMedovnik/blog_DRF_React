import { Routes, Route } from 'react-router-dom'
import ArticleDetail from './containers/ArticleLIstDetailView'
import ArticleListView from './containers/ArticleListView'

const BaseRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ArticleListView />} />
                <Route path='/:id' element={<ArticleDetail />} />
            </Routes>
        </div>
    )
}

export default BaseRouter