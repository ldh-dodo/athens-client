type Props = {
  className: string;
  fill?: string;
};

export default function SpeakerIcon({ className, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 15 14"
      aria-hidden
    >
      <path
        d="M8.71937 0.550646C8.63529 0.509674 8.5414 0.493108 8.44838 0.502831C8.35535 0.512553 8.26692 0.548174 8.19312 0.605646L3.82812 4.00002H1C0.734783 4.00002 0.48043 4.10538 0.292893 4.29291C0.105357 4.48045 0 4.7348 0 5.00002V9.00002C0 9.26524 0.105357 9.51959 0.292893 9.70713C0.48043 9.89466 0.734783 10 1 10H3.82812L8.19312 13.3944C8.26699 13.4518 8.35548 13.4874 8.44855 13.497C8.54161 13.5066 8.6355 13.4899 8.71956 13.4489C8.80362 13.4078 8.87446 13.3439 8.92404 13.2646C8.97361 13.1852 8.99993 13.0936 9 13V1.00002C9.00001 0.906351 8.97371 0.814561 8.9241 0.73511C8.87448 0.65566 8.80355 0.591744 8.71937 0.550646ZM1 5.00002H3.5V9.00002H1V5.00002ZM8 11.9775L4.5 9.25565V4.7444L8 2.02252V11.9775ZM11.375 5.34752C11.7772 5.80407 11.999 6.3916 11.999 7.00002C11.999 7.60844 11.7772 8.19597 11.375 8.65252C11.2867 8.74959 11.1637 8.80803 11.0327 8.81523C10.9016 8.82244 10.773 8.77783 10.6745 8.69103C10.5761 8.60424 10.5157 8.48221 10.5065 8.3513C10.4972 8.22038 10.5398 8.09107 10.625 7.99127C10.8662 7.71738 10.9992 7.36496 10.9992 7.00002C10.9992 6.63509 10.8662 6.28267 10.625 6.00877C10.5398 5.90897 10.4972 5.77966 10.5065 5.64874C10.5157 5.51783 10.5761 5.39581 10.6745 5.30901C10.773 5.22222 10.9016 5.17761 11.0327 5.18481C11.1637 5.19202 11.2867 5.25046 11.375 5.34752ZM14.5 7.00002C14.5007 8.23015 14.0474 9.41726 13.2269 10.3338C13.1378 10.4301 13.0144 10.4876 12.8833 10.4939C12.7522 10.5001 12.624 10.4545 12.5262 10.367C12.4284 10.2794 12.369 10.157 12.3607 10.026C12.3524 9.89503 12.3959 9.76606 12.4819 9.6669C13.1378 8.93355 13.5004 7.9842 13.5004 7.00033C13.5004 6.01647 13.1378 5.06712 12.4819 4.33377C12.4369 4.28506 12.402 4.22788 12.3793 4.16555C12.3566 4.10323 12.3465 4.03701 12.3496 3.97076C12.3528 3.9045 12.3691 3.83953 12.3976 3.77963C12.426 3.71973 12.4662 3.6661 12.5156 3.62186C12.565 3.57762 12.6227 3.54366 12.6854 3.52195C12.7481 3.50024 12.8145 3.49122 12.8807 3.49541C12.9469 3.4996 13.0116 3.51692 13.071 3.54636C13.1304 3.5758 13.1834 3.61678 13.2269 3.6669C14.0476 4.58303 14.501 5.77003 14.5 7.00002Z"
        fill={fill}
      />
    </svg>
  );
}
