import BlogMenu from 'src/layouts/BlogMenuLayout'
import BlogFooter from 'src/layouts/BlogFooterLayout'
const BlogLayout = ({ children }) => {
  return (<>
    <BlogMenu />
    <main>{children}</main>
    <BlogFooter />
    </>)
}

export default BlogLayout
