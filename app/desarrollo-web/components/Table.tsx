'use client'

import React, { useEffect, useState } from 'react';
import jsonData from './../data/features.json'
import { HiCheck } from "react-icons/hi";

export default function Table() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(jsonData);
	}, []);

	const getBooleanResult = (booleanResult, type) => {
		return booleanResult ? (<div className={`check-${type}`}><HiCheck className='text-sm'></HiCheck></div>) : '-';
	}

	const features = data.map((feature, index) => {


		let professionalResult, businessResult, corporateResult;

		if (feature.type == "string") {
			professionalResult = feature.professional;
			businessResult = feature.business;
			corporateResult = feature.corporate;
		} else {
			professionalResult = getBooleanResult(feature.professional, "professional");
			businessResult = getBooleanResult(feature.business, "business");
			corporateResult = getBooleanResult(feature.corporate, "corporate");
		}

		return (
			<tr className="border-b border-gray-200 border-opacity-10" key={index}>
				<th scope="row" className="px-6 py-5 text-left font-medium">
					{feature.feature}
				</th>
				<td className="px-6 py-4 text-center">
					{professionalResult}
				</td>
				<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-center">
					{businessResult}
				</td>
				<td className="px-6 py-4 text-center">
					{corporateResult}
				</td>
			</tr>
		)
	});

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full">
				<thead>
					<tr className='bg-[#F4F4F6]'>
						<th scope="col" className="px-6 py-7">
						</th>
						<th scope="col" className="px-6 py-5 font-semibold text-lg">
							Profesional
						</th>
						<th scope="col" className="px-6 py-5 font-semibold text-lg">
							Empresarial
						</th>
						<th scope="col" className="px-6 py-5 font-semibold text-lg">
							Corporativo
						</th>
					</tr>
				</thead>
				<tbody>
					{features}
				</tbody>
			</table>
		</div>
	)
}