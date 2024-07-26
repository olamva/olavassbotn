const ExpandedProjectPage = ({
	params: { projectID },
}: {
	params: { projectID: string };
}) => (
	<div>
		<h1>Project {projectID}</h1>
	</div>
);

export default ExpandedProjectPage;
