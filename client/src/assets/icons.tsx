import { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<SVGElement>

export const Icons = {
    facebook: (props: IconProps) => (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        viewBox="0 0 48 48"
        >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#4460A0" transform="translate(-200 -160)">
            <path d="M225.638 208H202.65a2.65 2.65 0 01-2.649-2.65v-42.7a2.649 2.649 0 012.65-2.65h42.701a2.649 2.649 0 012.649 2.65v42.7a2.65 2.65 0 01-2.649 2.65h-12.232v-18.588h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002v-6.479c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V208z"></path>
            </g>
        </g>
        </svg>
    ),
    google: (props: IconProps) => (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        viewBox="-0.5 0 48 48"
        >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-401 -860)">
            <g transform="translate(401 860)">
                <path
                fill="#FBBC05"
                d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 00.213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 019.827 24"
                ></path>
                <path
                fill="#EB4335"
                d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 00-21.09 13.071l7.908 6.04a13.849 13.849 0 0113.182-9.51"
                ></path>
                <path
                fill="#34A853"
                d="M23.714 37.867a13.849 13.849 0 01-13.182-9.51l-7.909 6.038a23.43 23.43 0 0021.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
                ></path>
                <path
                fill="#4285F4"
                d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
                ></path>
            </g>
            </g>
        </g>
        </svg>
    ),
    apple: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="-1.5 0 20 20"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#000" transform="translate(-102 -7439)">
                <g transform="translate(56 160)">
                <path d="M57.57 7282.193c.73-.845 1.221-2.022 1.087-3.193-1.05.04-2.322.671-3.075 1.515-.677.749-1.267 1.946-1.108 3.094 1.172.087 2.368-.57 3.097-1.416m2.628 7.432c.03 3.027 2.77 4.034 2.801 4.047-.022.07-.438 1.435-1.444 2.845-.87 1.218-1.774 2.43-3.196 2.457-1.398.025-1.848-.794-3.447-.794-1.597 0-2.097.768-3.42.819-1.373.049-2.42-1.318-3.296-2.532-1.794-2.483-3.164-7.017-1.324-10.077.915-1.52 2.548-2.482 4.321-2.506 1.348-.025 2.621.869 3.445.869.825 0 2.372-1.075 3.998-.917.68.027 2.591.263 3.818 1.984-.1.059-2.28 1.275-2.256 3.805"></path>
                </g>
            </g>
            </g>
        </svg>
    ),
    EyeSlashFilledIcon: (props: IconProps) => (
        <svg
          {...props}
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1em"
          role="presentation"
          viewBox="0 0 24 24"
          width="1em"
          {...props}
        >
          <path
            d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
            fill="currentColor"
          />
          <path
            d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
            fill="currentColor"
          />
          <path
            d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
            fill="currentColor"
          />
          <path
            d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
            fill="currentColor"
          />
          <path
            d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
            fill="currentColor"
          />
        </svg>
    ),
    EyeFilledIcon: (props: IconProps) => (
        <svg
          {...props}
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1em"
          role="presentation"
          viewBox="0 0 24 24"
          width="1em"
          {...props}
        >
          <path
            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
            fill="currentColor"
          />
          <path
            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
            fill="currentColor"
          />
        </svg>
      )
}