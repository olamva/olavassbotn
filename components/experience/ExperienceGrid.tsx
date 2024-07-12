"use client";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { useExperienceList } from "@/hooks/useExperienceList";
import { useCallback, useEffect, useRef, useState } from "react";

const ExperienceGrid = () => {
	const experienceList = useExperienceList();
	const [leftList, setLeftList] = useState(
		experienceList.filter((_, index) => index % 2 === 0)
	);
	const [rightList, setRightList] = useState(
		experienceList.filter((_, index) => index % 2 === 1)
	);

	const leftListRef = useRef<HTMLDivElement>(null);
	const rightListRef = useRef<HTMLDivElement>(null);

	const swapElements = useCallback(() => {
		if (!leftListRef.current || !rightListRef.current) return;
		const leftChildren = leftListRef.current.children;
		const leftLastChildHeight =
			leftChildren[leftChildren.length - 1].clientHeight;
		const leftHeight = leftListRef.current.clientHeight;
		const rightHeight = rightListRef.current.clientHeight;
		const difference = Math.abs(leftHeight - rightHeight);

		if (difference <= leftLastChildHeight) return false;

		if (leftHeight > rightHeight) {
			const lastItem = leftList.pop();
			if (lastItem) rightList.push(lastItem);
		} else {
			const lastItem = rightList.pop();
			if (lastItem) leftList.push(lastItem);
		}

		setLeftList([...leftList]);
		setRightList([...rightList]);
		return true;
	}, [leftList, rightList]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!swapElements()) {
				clearInterval(intervalId);
			}
		}, 1);

		return () => clearInterval(intervalId);
	}, [leftList, rightList, swapElements]);

	return (
		<div className="mt-4 m-auto max-w-full md:max-w-[80%] grid gap-2 w-full grid-cols-1 sm:grid-cols-2">
			<div className="grid gap-2 h-fit" ref={leftListRef}>
				{leftList.map((item, index) => (
					<ExperienceCard key={index} experience={item} />
				))}
			</div>
			<div className="grid gap-2 h-fit" ref={rightListRef}>
				{rightList.map((item, index) => (
					<ExperienceCard key={index} experience={item} />
				))}
			</div>
		</div>
	);
};

export default ExperienceGrid;
