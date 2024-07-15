const WordleNotifications = ({
	notifications,
}: {
	notifications: string[];
}) => (
	<div className="flex absolute w-full max-h-full items-center flex-col overflow-hidden">
		{notifications.map((notification, index) => (
			<div
				key={index}
				className="text-center text-sm bg-primary w-fit rounded-md my-0.5 p-2 z-50"
			>
				{notification}
			</div>
		))}
	</div>
);

export default WordleNotifications;
