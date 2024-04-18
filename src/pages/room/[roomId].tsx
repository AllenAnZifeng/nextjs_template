'use client'
import { Tldraw } from 'tldraw'
import type { NextApiRequest, NextApiResponse } from 'next'
import Board from "@/components/Board";


export default function Home(  req: NextApiRequest,
							   res: NextApiResponse) {

	const roomId = req.query.roomId as string;

	return (
		<main>
			<div >
				<Board roomId={roomId} />
			</div>
		</main>
	)
}
