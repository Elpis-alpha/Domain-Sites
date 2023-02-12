import { useRouter } from "next/router"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"
import { v4 } from "uuid"
import { waitFor } from "../controllers/TimeCtrl"
import { sitesList } from "../utils"

const SiteView = ({ slug, ua }: { slug: string, ua: any }) => {
	const router = useRouter()
	const [closeView, setCloseView] = useState(false)
	const site = sitesList.find(si => si.slug === slug)
	const closePanel = async () => {
		setCloseView(true)
		await waitFor(450)
		router.push("/")
	}
	if (!site) return <></>
	return (
		// @ts-ignore
		<SiteViewStyle className={closeView ? "fade-out" : ""} ua={ua}>
			<div className="inner">
				<div className="ih-small">
					<h3>{site.name}</h3>
					<p>{site.description}</p>
					<p><a href={"https://" + site.url} target="_blank" rel="noopener noreferrer">{site.url}</a></p>
					<div className="cats">{site.category.map(cat => <div key={"sc-" + v4()}>{cat}</div>)}</div>
					<div className="alts">{site.alternate.map(alt => <a key={"alt-" + v4()} href={"https://" + alt} target="_blank" rel="noopener noreferrer">{alt}</a>)}</div>
				</div>
			</div>
			<div className="cancel-x-1" onClick={closePanel}><FaTimes /></div>
		</SiteViewStyle>
	)
}
const SiteViewStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 200;
	background-color: rgba(0, 0, 0, .3);

	@keyframes opacity-in {
		from {opacity: 0}	
		to {opacity: 1}	
	}
	opacity: 1;
	${(props: any) => props.ua ? "animation: opacity-in .5s 1;" : "animation: initial;"};
	
	&.fade-out {
		@keyframes opacity-out {
			from {opacity: 1}	
			to {opacity: 0}	
		}
		animation: opacity-out .5s 1;
		opacity: 0;
	}

	.inner {
		border-radius: 1pc;
		background: linear-gradient(145deg, #cacaca, #f0f0f0);
		box-shadow:  20px 20px 60px #989595, -20px -20px 60px #c0c0c0;	
		padding: .8pc 1.5pc;
		width: 70vw;
		text-align: center;
		max-height: 70vh;
		overflow: auto;

		.ih-small {
			display: contents;
		}

		.cats {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			
			div {
				border-radius: .5pc;
				margin: .5pc;
				padding: .1pc .8pc;
				box-shadow:  2px 2px 5px #bebebe, -2px -2px 5px #ffffff;
				background: linear-gradient(145deg, #f0f0f0, #cacaca);
			}
		}

		.alts {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			
			div {
				padding: .1pc .8pc;
			}
		}
	}

	.cancel-x-1 {
		display: flex;
		align-items: baseline;
		justify-content: center;
		position: absolute;
		top: 2pc;
		right: 2pc;
		color: red;
		font-size: 2pc;
		cursor: pointer;
	}

	@media screen and (max-width: 550px) {
		
		.inner {
			border-radius: 0;
			padding: 3pc 1.5pc;
			width: 100%;
			background-color: #e0e0e0;
			text-align: center;
			height: 100vh;
			max-height: initial;
			overflow: auto;
			display: flex;

			.ih-small {
				margin: auto 0;
				display: block;
			}

			.cats {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				
				div {
					border-radius: .5pc;
					margin: .5pc;
					padding: .1pc .8pc;
					box-shadow:  2px 2px 5px #bebebe, -2px -2px 5px #ffffff;
					background: linear-gradient(145deg, #f0f0f0, #cacaca);
				}
			}

			.alts {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				
				div {
					padding: .1pc .8pc;
				}
			}
		}
		
		.cancel-x-1 {
			top: 1.5pc;
			right: 1.5pc;
			color: red;
			font-size: 1.8pc;
			cursor: pointer;
		}
	}
`
export default SiteView