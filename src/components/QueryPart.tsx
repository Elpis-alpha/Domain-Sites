import styled from "styled-components"
import ElpisImage from "./ElpisImage"

const QueryPart = () => {
	return (
		<QueryPartStyle>
			<div className="inner">
				<div className="top-img">
					<ElpisImage src="/images/blur/elpis-logo.png" alt="Elpis logo" title="Elpis logo" removeNext={false} />
				</div>
				<div className="search-box">
					<h2>Search</h2>
				</div>
			</div>
		</QueryPartStyle>
	)
}

const QueryPartStyle = styled.div`
	display: flex;
	overflow: auto;
	width: 230px;
	background-color: #4887b0;
	color: #eee;

	.inner {
		padding: 2pc .5pc;
		width: 100%;
		/* margin: auto 0; */

		.top-img {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			img {
				width: 220px;
			}
		}
	}
`

export default QueryPart