import RecentPosts from "./RecentPosts";
import Categories from "./Categories";

export default function Sidebar({ recent }) {
    return (
        <div className="space-y-12">
            <RecentPosts posts={recent} />
            <Categories />
        </div>
    )
}