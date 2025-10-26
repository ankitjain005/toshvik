import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Outer container to add spacing from left/right
const CardContainer = styled.div`
	padding: 0 10px;
	display: flex;
	justify-content: center; /* center the card inside the grid cell */
	margin: 8px 0; /* consistent vertical margin between rows */

	@media (min-width: 768px) {
		padding: 0;
	}
`;

const CardWrapper = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.cardBackground};
	border-radius: 10px;
	overflow: hidden;
	transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

	/* constrain visual width so image fills more of the card area */
	/* increased width so card content fits; allow height to grow with content */
	max-width: 400px;
	width: 100%;

	/* allow cards to expand with content but keep a reasonable minimum */
	min-height: 480px;
	height: auto;
	box-sizing: border-box;
	padding: 14px; /* slightly more padding for readability */
	margin: 10px; /* outer margin */

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
	}

	&:focus-visible {
		outline: 3px solid rgba(0, 123, 255, 0.35);
		outline-offset: 2px;
	}

	.image-wrapper {
		width: 100%;
		/* image area remains prominent but smaller proportionally when content grows */
		height: 260px;
		max-height: 40%;
		background-color: ${({ theme }) => theme.cardBackground};
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 8px;
		flex: 0 0 auto;
	}

	img {
		/* show the entire image inside the preview box */
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}

	@media (min-width: 768px) {
		.image-wrapper {
			height: 280px;
		}
	}

	.card-content {
		/* allow content area to take remaining space and grow when needed */
		flex: 1 1 auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		h3 {
			margin: 0 0 0.4rem 0;
			font-size: 1.1rem; /* slightly larger for readability */
			color: ${({ theme }) => theme.text};
		}

		p {
			margin: 0.15rem 0;
			color: ${({ theme }) => theme.text};
			font-size: 1rem;
			white-space: normal; /* ensure wrapping */
			word-break: break-word;
		}

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: auto; /* keep row aligned to bottom */
		}

		.price {
			font-weight: bold;
			color: ${({ theme }) => theme.secondary};
			font-size: 1.1rem;
			margin-top: 10px;
		}

		.quantity {
			font-size: 0.95rem;
		}

		.new-tag {
			color: #e53935;
			font-weight: 700;
			font-size: 0.9rem;
			background: rgba(229, 57, 53, 0.08);
			padding: 4px 8px;
			border-radius: 6px;
			align-self: flex-start;
		}
	}
`;

const ProductCard = ({ product }) => {
	// safe fallback image
	const fallback = 'https://via.placeholder.com/800x600?text=No+Image';
	const imageSrc =
		product && product.imageUrl
			? product.imageUrl.startsWith('http')
				? product.imageUrl
				: process.env.PUBLIC_URL + product.imageUrl
			: fallback;

	const description = product && product.description ? product.description.slice(0, 120) : '';
	const quantityText = product
		? Array.isArray(product.quantity)
			? product.quantity.map((q) => `${q}kg`).join(', ')
			: `${product.quantity ?? '-'}kg`
		: '-';

	return (
		<CardContainer>
			<CardWrapper to={`/products/${product?._id}`} aria-label={product?.name || 'Product'}>
				<div className='image-wrapper'>
					<img
						src={imageSrc}
						alt={product?.name || 'Product image'}
						loading='lazy'
						onError={(e) => {
							e.currentTarget.onerror = null;
							e.currentTarget.src = fallback;
						}}
					/>
				</div>

				<div className='card-content'>
					<h3>{product?.name || 'Untitled Product'}</h3>
					<p>
						{description}
						{description.length === 120 ? '...' : ''}
					</p>

					<div className='row'>
						<p className='quantity'>
							<strong>{quantityText}</strong>
						</p>

						{product?.price !== undefined && <p className='price'>₹{product.price}</p>}
					</div>

					{product?.isNewLaunch && <span className='new-tag'>New!</span>}
				</div>
			</CardWrapper>
		</CardContainer>
	);
};

export default ProductCard;
