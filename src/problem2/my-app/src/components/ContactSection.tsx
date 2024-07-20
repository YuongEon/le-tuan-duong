import React from 'react'
import { ButtonBase } from './Button'

const ContactSection = () => {
	return (
		<section className="pb-20" id="contact">
			<h3 className="text-center text-white text-[30px] font-semibold pb-6">
				Contact with me
			</h3>

			<ul className="flex justify-center items-center gap-6">
				<li>
					<a
						href="https://www.facebook.com/yuong.eon/"
						className="block w-fit"
						target="_blank"
						rel="noreferrer"
					>
						<ButtonBase className="text-[#333] flex px-6 py-2 rounded-full">
							<span className="text-[#333]">Facebook</span>
						</ButtonBase>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/duong-mach-10964230b"
						className="block w-fit "
						target="_blank"
						rel="noreferrer"
					>
						<ButtonBase className="text-[#333] flex px-6 py-2 rounded-full">
							<span className="text-[#333]">Linked</span>
						</ButtonBase>
					</a>
				</li>
				<li>
					<a href="mailto:letuanduong03@gmail.com" className="block w-fit ">
						<ButtonBase className="text-[#333] flex px-6 py-2 rounded-full">
							<span className="text-[#333]">Gmail</span>
						</ButtonBase>
					</a>
				</li>
			</ul>
		</section>
	)
}

export default ContactSection
