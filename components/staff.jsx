
import Link from 'next/link';

export default function StaffMember({ staff }) {
	return (
        <a target="_blank" href={"https://twitter.com/" +staff.twitter } rel="noreferrer">
			<div className="square-image"><img src={staff.image_path } alt={ staff.name }/></div>
			<div className="details">
				<div className="name">{ staff.name }</div>
				<div className="position">{ staff.position }</div>
			</div>
		</a>		
	);
}
