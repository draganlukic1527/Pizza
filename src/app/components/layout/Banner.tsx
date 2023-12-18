"use client";

const Banner = () => {
	return (
		<section className="bg-primary bg-pattern lg:min-h-[768] pt-16">
			<div className="container mx-auto min-h-[768px] flex items-center justify-center">
				<div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
					<div className="flex-1">
						<div className="font-bangers text-[32px] text-white uppercase tracking-[0.03em]">
							Pizza
						</div>
						<h1 className="text-6xl lg:text-8xl font-bangers drop-shadow-md">
							Delicious Pizza <br /> in every bite
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
