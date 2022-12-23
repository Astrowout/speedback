import { FunctionComponent } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import cn from "classnames";

type LogoProps = {
	size?: number,
	className?: string,
	url?: string,
	dark?: boolean,
}

const Logo: FunctionComponent<LogoProps> = ({ className, dark = false, size = 26, url = "/app/projects" }) => {

	const handleScrollToTop = () => {
		if (url === "/") {
			gsap.to(window, { scrollTo: 0, duration: 0.8, ease: "power2" });
		}
	}

	return (
		<Link
			href={url}
			className={cn(className, {
				'text-white': dark,
				'text-black': !dark,
			})}
			onClick={handleScrollToTop}
		>
			<svg className="fill-current" height={size} viewBox="0 0 127 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M3 6C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H6C6.26522 16 6.51957 16.1054 6.70711 16.2929L10 19.5858L13.2929 16.2929C13.4804 16.1054 13.7348 16 14 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H3ZM0.87868 4.87868C1.44129 4.31607 2.20435 4 3 4H17C17.7957 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V15C20 15.7957 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7957 18 17 18H14.4142L10.7071 21.7071C10.3166 22.0976 9.68342 22.0976 9.29289 21.7071L5.58579 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V7C0 6.20435 0.31607 5.44129 0.87868 4.87868ZM4 9C4 8.44772 4.44772 8 5 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H5C4.44772 10 4 9.55228 4 9ZM4 13C4 12.4477 4.44772 12 5 12H9C9.55229 12 10 12.4477 10 13C10 13.5523 9.55229 14 9 14H5C4.44772 14 4 13.5523 4 13Z" />
				<path d="M32.0943 13.75C32.9943 13.8667 33.6527 14.2 34.0693 14.75C34.5027 15.3 34.7193 16.1833 34.7193 17.4C34.7193 18.6 34.3943 19.55 33.7443 20.25C33.111 20.95 32.036 21.3 30.5193 21.3C29.0193 21.3 27.7027 21.025 26.5693 20.475L26.9693 19.225C28.4693 19.5083 29.6277 19.65 30.4443 19.65C31.261 19.65 31.8443 19.4917 32.1943 19.175C32.5443 18.8417 32.7193 18.35 32.7193 17.7C32.7193 17.0333 32.6193 16.5333 32.4193 16.2C32.236 15.8667 31.8443 15.6583 31.2443 15.575L29.2193 15.3C28.236 15.1667 27.5693 14.8 27.2193 14.2C26.8693 13.5833 26.6943 12.7 26.6943 11.55C26.6943 10.4 27.0277 9.475 27.6943 8.775C28.3777 8.075 29.3027 7.725 30.4693 7.725C32.0027 7.725 33.2943 8 34.3443 8.55L33.9693 9.95C32.6193 9.63333 31.5693 9.475 30.8193 9.475C30.086 9.475 29.5443 9.6 29.1943 9.85C28.861 10.1 28.6943 10.6 28.6943 11.35C28.6943 12.1 28.7693 12.6167 28.9193 12.9C29.0693 13.1833 29.4527 13.375 30.0693 13.475L32.0943 13.75ZM39.7766 11.525V19.125C40.6932 19.3083 41.5432 19.4 42.3266 19.4C43.1266 19.4 43.6599 19.2417 43.9266 18.925C44.2099 18.6083 44.3516 17.9833 44.3516 17.05V11.575C44.3516 10.7583 44.2266 10.1833 43.9766 9.85C43.7266 9.51667 43.1266 9.35 42.1766 9.35C41.2432 9.35 40.6099 9.54167 40.2766 9.925C39.9432 10.2917 39.7766 10.825 39.7766 11.525ZM46.4516 13.775C46.4516 16.0917 46.3932 17.475 46.2766 17.925C46.1599 18.375 46.0266 18.7917 45.8766 19.175C45.7432 19.5417 45.5682 19.8167 45.3516 20C45.1516 20.1833 44.9016 20.3667 44.6016 20.55C44.0682 20.85 43.2932 21 42.2766 21C41.2599 21 40.3849 20.8917 39.6516 20.675V25.55H37.7266V8H38.8516L39.1766 9.225C39.4932 8.775 39.9099 8.43333 40.4266 8.2C40.9432 7.95 41.3682 7.80833 41.7016 7.775C42.0516 7.74167 42.4932 7.725 43.0266 7.725C44.4432 7.725 45.3682 8.15833 45.8016 9.025C46.2349 9.875 46.4516 11.4583 46.4516 13.775ZM51.5184 11.55V14.125C53.2184 14.125 54.2267 14.0667 54.5434 13.95C54.8767 13.8167 55.1684 13.6833 55.4184 13.55C55.8684 13.3167 56.0934 12.8583 56.0934 12.175V11.6C56.0934 10.7833 55.9684 10.2083 55.7184 9.875C55.4684 9.54167 54.8684 9.375 53.9184 9.375C52.985 9.375 52.3517 9.56667 52.0184 9.95C51.685 10.3167 51.5184 10.85 51.5184 11.55ZM51.7434 8.05C52.0267 7.91667 52.3517 7.83333 52.7184 7.8C53.085 7.75 53.6017 7.725 54.2684 7.725C54.9517 7.725 55.585 7.81667 56.1684 8C56.7517 8.18333 57.1767 8.475 57.4434 8.875C57.7267 9.25833 57.91 9.65833 57.9934 10.075C58.0934 10.475 58.1434 10.9417 58.1434 11.475C58.1434 11.9917 58.11 12.425 58.0434 12.775C57.9767 13.1083 57.8934 13.4 57.7934 13.65C57.71 13.9 57.56 14.125 57.3434 14.325C57.1434 14.5083 56.9517 14.6667 56.7684 14.8C56.6017 14.9333 56.3434 15.05 55.9934 15.15C55.66 15.2333 55.3684 15.3 55.1184 15.35C54.8684 15.4 54.51 15.4417 54.0434 15.475C53.3434 15.525 52.5017 15.55 51.5184 15.55V17.425C51.5184 18.2917 51.7017 18.8833 52.0684 19.2C52.435 19.5 52.9934 19.65 53.7434 19.65C55.1267 19.65 56.3684 19.4167 57.4684 18.95L57.8684 20.2C56.6184 20.9333 55.235 21.3 53.7184 21.3C52.9184 21.3 52.2684 21.2083 51.7684 21.025C51.285 20.8583 50.935 20.6667 50.7184 20.45C50.5184 20.2333 50.3434 20.0333 50.1934 19.85C50.0434 19.6667 49.9184 19.4 49.8184 19.05C49.735 18.7 49.6684 18.4 49.6184 18.15C49.5684 17.8833 49.535 17.5167 49.5184 17.05C49.4684 16.25 49.4434 15.5 49.4434 14.8V13.3C49.4434 12.4167 49.4767 11.7833 49.5434 11.4C49.61 11.0167 49.6767 10.6583 49.7434 10.325C49.81 9.975 49.9017 9.71667 50.0184 9.55C50.135 9.36667 50.2684 9.15833 50.4184 8.925C50.585 8.69167 50.7767 8.51667 50.9934 8.4C51.2267 8.28333 51.4767 8.16667 51.7434 8.05ZM62.7068 11.55V14.125C64.4068 14.125 65.4152 14.0667 65.7318 13.95C66.0652 13.8167 66.3568 13.6833 66.6068 13.55C67.0568 13.3167 67.2818 12.8583 67.2818 12.175V11.6C67.2818 10.7833 67.1568 10.2083 66.9068 9.875C66.6568 9.54167 66.0568 9.375 65.1068 9.375C64.1735 9.375 63.5402 9.56667 63.2068 9.95C62.8735 10.3167 62.7068 10.85 62.7068 11.55ZM62.9318 8.05C63.2152 7.91667 63.5402 7.83333 63.9068 7.8C64.2735 7.75 64.7902 7.725 65.4568 7.725C66.1402 7.725 66.7735 7.81667 67.3568 8C67.9402 8.18333 68.3652 8.475 68.6318 8.875C68.9152 9.25833 69.0985 9.65833 69.1818 10.075C69.2818 10.475 69.3318 10.9417 69.3318 11.475C69.3318 11.9917 69.2985 12.425 69.2318 12.775C69.1652 13.1083 69.0818 13.4 68.9818 13.65C68.8985 13.9 68.7485 14.125 68.5318 14.325C68.3318 14.5083 68.1402 14.6667 67.9568 14.8C67.7902 14.9333 67.5318 15.05 67.1818 15.15C66.8485 15.2333 66.5568 15.3 66.3068 15.35C66.0568 15.4 65.6985 15.4417 65.2318 15.475C64.5318 15.525 63.6902 15.55 62.7068 15.55V17.425C62.7068 18.2917 62.8902 18.8833 63.2568 19.2C63.6235 19.5 64.1818 19.65 64.9318 19.65C66.3152 19.65 67.5568 19.4167 68.6568 18.95L69.0568 20.2C67.8068 20.9333 66.4235 21.3 64.9068 21.3C64.1068 21.3 63.4568 21.2083 62.9568 21.025C62.4735 20.8583 62.1235 20.6667 61.9068 20.45C61.7068 20.2333 61.5318 20.0333 61.3818 19.85C61.2318 19.6667 61.1068 19.4 61.0068 19.05C60.9235 18.7 60.8568 18.4 60.8068 18.15C60.7568 17.8833 60.7235 17.5167 60.7068 17.05C60.6568 16.25 60.6318 15.5 60.6318 14.8V13.3C60.6318 12.4167 60.6652 11.7833 60.7318 11.4C60.7985 11.0167 60.8652 10.6583 60.9318 10.325C60.9985 9.975 61.0902 9.71667 61.2068 9.55C61.3235 9.36667 61.4568 9.15833 61.6068 8.925C61.7735 8.69167 61.9652 8.51667 62.1818 8.4C62.4152 8.28333 62.6652 8.16667 62.9318 8.05ZM78.4953 17.5V9.75C77.5786 9.56667 76.7203 9.475 75.9203 9.475C75.137 9.475 74.6036 9.63333 74.3203 9.95C74.0536 10.2667 73.9203 10.8917 73.9203 11.825V17.45C73.9203 18.2667 74.0453 18.8417 74.2953 19.175C74.5453 19.5083 75.137 19.675 76.0703 19.675C77.0203 19.675 77.662 19.4917 77.9953 19.125C78.3286 18.7417 78.4953 18.2 78.4953 17.5ZM71.8203 15.5C71.8203 13.4167 71.8536 12.1583 71.9203 11.725C71.987 11.275 72.0536 10.875 72.1203 10.525C72.187 10.1583 72.2703 9.88333 72.3703 9.7C72.487 9.5 72.6203 9.28333 72.7703 9.05C72.937 8.81667 73.1203 8.64167 73.3203 8.525C73.537 8.40833 73.7786 8.29167 74.0453 8.175C74.5286 7.975 75.2286 7.875 76.1453 7.875C77.062 7.875 77.887 7.98333 78.6203 8.2V3H80.5453V21H79.4203L79.0953 19.775C78.7786 20.225 78.362 20.575 77.8453 20.825C77.3453 21.0583 76.912 21.1917 76.5453 21.225C76.1953 21.275 75.762 21.3 75.2453 21.3C73.8453 21.3 72.9203 20.8583 72.4703 19.975C72.037 19.075 71.8203 17.5833 71.8203 15.5ZM86.3371 11.65V19.4C87.2538 19.5833 88.1038 19.675 88.8871 19.675C89.6871 19.675 90.2204 19.5167 90.4871 19.2C90.7704 18.8833 90.9121 18.2583 90.9121 17.325V11.7C90.9121 10.8833 90.7871 10.3083 90.5371 9.975C90.2871 9.64167 89.6871 9.475 88.7371 9.475C87.8038 9.475 87.1704 9.66667 86.8371 10.05C86.5038 10.4167 86.3371 10.95 86.3371 11.65ZM84.2871 3H86.2121V8.85C86.9121 8.2 87.9954 7.875 89.4621 7.875C90.9454 7.875 91.9038 8.325 92.3371 9.225C92.7871 10.1083 93.0121 11.6667 93.0121 13.9C93.0121 15.8333 92.9788 17.025 92.9121 17.475C92.8454 17.9083 92.7788 18.3083 92.7121 18.675C92.6454 19.025 92.5538 19.3 92.4371 19.5C92.3371 19.6833 92.2038 19.8917 92.0371 20.125C91.8871 20.3583 91.7038 20.5333 91.4871 20.65C91.2871 20.7667 91.0538 20.8833 90.7871 21C90.3038 21.2 89.5121 21.3 88.4121 21.3C87.3121 21.3 85.9371 21.0583 84.2871 20.575V3ZM104.554 21H103.429L103.104 19.775C102.704 20.225 102.254 20.575 101.754 20.825C101.254 21.0583 100.837 21.1917 100.504 21.225C100.171 21.275 99.6956 21.3 99.0789 21.3C98.4789 21.3 97.9456 21.1917 97.4789 20.975C97.0122 20.7583 96.6622 20.4333 96.4289 20C96.0622 19.3 95.8789 18.3583 95.8789 17.175C95.8789 15.675 96.3122 14.7 97.1789 14.25C97.5289 14.0833 97.8372 13.95 98.1039 13.85C98.3872 13.75 98.8039 13.675 99.3539 13.625C99.9206 13.575 100.396 13.55 100.779 13.55C101.179 13.5333 101.754 13.5167 102.504 13.5V11.625C102.504 10.7583 102.321 10.175 101.954 9.875C101.587 9.55833 100.921 9.4 99.9539 9.4C98.9872 9.4 97.9372 9.58333 96.8039 9.95L96.4039 8.7C97.7039 8.06667 99.0789 7.75 100.529 7.75C102.262 7.75 103.379 8.1 103.879 8.8C104.146 9.18333 104.321 9.58333 104.404 10C104.504 10.4167 104.554 10.9583 104.554 11.625V21ZM102.504 17.5V14.925C100.804 14.925 99.7872 14.9917 99.4539 15.125C99.1372 15.2417 98.8539 15.3667 98.6039 15.5C98.1539 15.7333 97.9289 16.1917 97.9289 16.875V17.45C97.9289 18.2667 98.0539 18.8417 98.3039 19.175C98.5539 19.5083 99.1456 19.675 100.079 19.675C101.029 19.675 101.671 19.4917 102.004 19.125C102.337 18.7417 102.504 18.2 102.504 17.5ZM115.081 8.325L114.681 9.65C113.947 9.46667 113.206 9.375 112.456 9.375C111.706 9.375 111.156 9.425 110.806 9.525C110.456 9.625 110.206 9.8 110.056 10.05C109.922 10.3 109.839 10.525 109.806 10.725C109.772 10.925 109.756 11.2333 109.756 11.65V17.35C109.756 18.9167 110.556 19.7 112.156 19.7C112.806 19.7 113.697 19.5667 114.831 19.3L115.131 20.65C114.181 21.0833 113.122 21.3 111.956 21.3C111.156 21.3 110.506 21.2083 110.006 21.025C109.522 20.8583 109.172 20.6667 108.956 20.45C108.756 20.2333 108.581 20.0333 108.431 19.85C108.281 19.6667 108.156 19.4 108.056 19.05C107.972 18.7 107.906 18.4 107.856 18.15C107.806 17.8833 107.772 17.5167 107.756 17.05C107.706 16.25 107.681 15.5 107.681 14.8V13.3C107.681 12.4167 107.714 11.7833 107.781 11.4C107.847 11.0167 107.914 10.6583 107.981 10.325C108.047 9.975 108.139 9.71667 108.256 9.55C108.372 9.36667 108.506 9.15833 108.656 8.925C108.822 8.69167 109.014 8.51667 109.231 8.4C109.464 8.28333 109.722 8.16667 110.006 8.05C110.456 7.83333 111.181 7.725 112.181 7.725C113.197 7.725 114.164 7.925 115.081 8.325ZM119.488 3V21H117.438V3H119.488ZM120.088 14.1L123.813 8H125.988L122.263 14.1L126.188 21H124.013L120.088 14.1Z" />
			</svg>
		</Link>
	)
}

export default Logo;
