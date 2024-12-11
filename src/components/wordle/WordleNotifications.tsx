const WordleNotifications = ({
	notifications,
}: {
	notifications: string[];
}) => (
	<div className="absolute flex max-h-full w-full flex-col items-center overflow-hidden">
		{notifications.map((notification, index) => (
			<div
				key={index}
				className="bg-primary z-50 my-0.5 w-fit rounded-md p-2 text-center text-sm"
			>
				{notification}
			</div>
		))}
	</div>
);

export default WordleNotifications;
