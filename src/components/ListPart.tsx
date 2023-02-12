import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { catType, sitesList } from "../utils"

const ListPart = ({ sUA }: { sUA: any }) => {
	const router = useRouter()
	const filterText = (site: any) => site.name.toLowerCase().startsWith(searchText.toLowerCase())
	const { searchText, categories }: { categories: catType[], searchText: string } = useSelector((store: any) => store.filter)
	const filterCat = (site: any) => site.category.some((r: any) => categories.filter(cat => cat.active).map(cat => cat.name).includes(r))
	const clickSite = (e: any, site: any) => { sUA(true); if (e.target.tagName.toLowerCase() !== 'a') router.push(`/?site=${site.slug}`) }
	return (
		<ListPartStyle>
			<div className="inner">
				{sitesList.filter(filterText).filter(filterCat).map(site => <div onClick={e => clickSite(e, site)} key={site.id} className="site-holder">
					<div className="si-in">
						<h3>{site.name}</h3>
						<p>{site.description.slice(0, 100) + (site.description.length > 100 ? "..." : "")}</p>
						<p><a href={"https://" + site.url} target="_blank" rel="noopener noreferrer" title={site.name}>{site.url}</a></p>
					</div>
				</div>)}
			</div >
		</ListPartStyle >
	)
}

const ListPartStyle = styled.div`
	display: flex;
	width: calc(100% - 250px);
	height: 100%;
	overflow: auto;
	padding: 1pc;

	@media screen and (max-width: 700px) {
		width: 100%;
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-around;
		padding-bottom: 1pc;

		.site-holder {
			display: block;
			color: inherit;
			text-decoration: none;
			width: 30%;
			margin: 1pc 0;
			border-radius: 1pc;
			padding: .8pc 1pc;
			cursor: pointer;
			background: linear-gradient(145deg, #e6e6e6, #ffffff);
			box-shadow:  9px 9px 18px #e3e3e3, -9px -9px 18px #ffffff;
			transition: transform .5s;

			&:hover {
				transform: scale(1.1);
			}
			
			@media screen and (max-width: 1200px) {
				width: 47%;
				
				&:hover {
					transform: scale(1.08);
				}
			}
			
			@media screen and (max-width: 1000px) {
				width: 100%;
				
				&:hover {
					transform: scale(1.05);
				}
			}
		}
	}
`
export default ListPart