import styled from 'styled-components';

export const FootWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 100;
    font-family: PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
    background: #fff;
    > div {
        display: flex;
        align-items: center;
        > div:first-child {
            position: relative;
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            height: 28px;
            padding-left: 20px;
            > div:first-child {
                position: relative;
                padding-left: 12px;
                font-size: 25px;
                font-weight: 600;
                color: #fa8919;
                > span:first-child {
                    position: absolute;
                    top: 13px;
                    left: 0;
                    font-size: 14px;
                    font-weight: 400;
                    color: #fa8919; 
                }
                > span:last-child {
                    font-size: 25px;
                    font-weight: 600;
                    color: #fa8919; 
                }
            }
            > div:last-child {
                position: relative;
                top: 6px;
                align-self: flex-end;
                margin-left: 5px;
                font-size: 12px;
                font-weight: 500;
                color: #b2b2b2;
                text-decoration: line-through; 
                > div {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAA4CAYAAAArbsBgAAALE0lEQVR4Xu1dzW/cxhX/Pe5yZbdNARn90MppGtgBCiRH+R8oYLe3oK1jN3F6tm7tIbVWzimnSlSb9mydmw9bRhr01MAC2ktv0TE9FInbpLZWKYroUCO2dkW+4HFJajjLj+HurLyyuJc9kBzOe/Ob9/2GhILfw9X5Z5rAlQD8Q4fwPAPfBjBT9Ex97chy4AEI95jxqcP0t/2Gf/Pktc//lUcNZV0QwDSIVwFcBtA4sqyoJz4OBwIAN32m5ZPL25/pAw0B55E3/6ID/iOApwD0CPhzALwfBPz3E3untumNf/TGmU397HRygL1vPdXzW6fR4AUH+AkDLwJoAXjARFdnlrbfUWeeAk5vrf0rMH4PwCHgfT9oXDtx/d7H00lqPatJcuDRytPPNchfY8JPATAIr7WWun+I35kAZ29t/ufELKgKiOl1d3l7bZITq8c+Ghzor84vMfFvRJgw0SszS9s3ZeYhcCKb5iMA3yCmTg2ao7GohzXLvjffYYQ27wOf6QWxeULg9Nbab4FxhYD33E734mFNqH7P0eFAf7V9mwkXAX631dl5hR7+rv39ho+7APb3m/Tc117b/s/RIaee6WFx4Ms357/X3Gexd5t+A2coEUOEt1tL3VcPayL1e44eB3peW7ztVwm0THte+y8E/JiJL88s7WxMghxeeWaWrn+2O4mx6zEPjwN73txLBNpg4APqr7bvMeG038CzJ3/d/dTWNCJJdhXAGUGo29n2bI2tj/No5btnTlz/XNSt9V//t/PnEWAhHNjBlntte9P6S3IGlA237+xfbQbN9SobT3gfD2mT75FZ829i3Kee134kaQT35NdP0C8/3rPFFFlMx3E+BDALYNcN3LNViC+bR8xUJr4ExgI5dGESi6p4FJj0BtBp3lubu0RMt4R/BPJMQNBba18F40Y8lk2+8BvPt/ondwUjPQEOy0tanW5m+qFsAYuuq0wHYbG11F0fdTwBIjVoIQQJ0Xn5T43F2Gwtdy+MOn7ec48TOD2vLQAQqW0M2p7X/kSkfEKPZb7EeBkbOLKgjWbjYKLKCgQczEY7RijfIqLlvAXy9/27om7C8RxnlTmUVKIeZodAMjzIXQZvtIKWZ1OqyWseF3BEovad/hcxqUEQnC1Tx+m5QmyRS/K8TfvVGnBSUmWM7R6rAbEpOOA7JUPtErAJ0BYHvNm63t0a49WFj9qUmlXmqKocAjbcTlcSzrm/yDQQaSMJgk2X3ct9py+mgmxqa6bCUQGOGLybBBoYvg62YslUZRHGuTe1iydkR2XNr7fW/jCRtAZqvrfavgPCeRkrlk6KjRSCyYYqtwcc1esYZ4Uij0WVOIdtjGZN/3EAR5O6d1ud7tki1hapUxVQNvhpDTgqQaFebvQvBX6wWaSPw50AmnV9d0O3SaYNOHve3CqBQvfWpodSBIQqi62DzA3ccypPNe9WbM2xnBTrwIkIENdRjNr1Vqe7mMecvte+FRtubuCeUgmdNuCkFvEQVJUGhELbRAdFHrBTKivUZTg3ql1oHTgyH8UVzCU45S1k6N3jDhwVqEV2SSTd78R2UJka0pyYXQS4MAp4JgMcNfiUIxJTAaqMe6YOOEpcpGxxxjHx5NkhyZBj0A6DptzrijZ2EhcK5zqC2poIcKLJSexhVuI2raXuOZ2ZilTKNPqmEDhhgHTAZ7MFGgVAkSSO3efBEBnA0UEjfHZ994Jp/EoNKg5oqpYOmhhwVJFYZL/koX2agJMRU9ptdbqnRgFG2TOqEZ7cqwGnt9JeQAM3lIDobhAE58oCgxmbNy15gHU3cJdNwGcNOPFAZYwpvR4xyTAAmDtc1R1k6ubG99mMwsZj5tKsAEdzPuTRke2UHLW1BR+LZXZPDZxSJEu64cD7U24v9BgNhk3doqsoUYexxxmrqozofAKaOBPOxLtFucBQojGF+b04EJgV9S/bGNaAo6bws5gW1apGNkJ+riomXI9LgMPqxPSPwjD6ID9G2EKAg1ofBxvjJFMTyaLlimQRo8isVXWVAidjkxrkJSmX4dRBSK9q0yQSvyQyrHprakJbk2SlqQlrwCnbYaoqM8nAm9g4hxHN1XNFTNhMyhVG8Eay+KS7yFJ6st/cX1CBI9JB4cmQLTIucEIbXDYJ9W+xw+tlxXw1cEoQn5IEhEWJcifZalt5HzF2HYgndaB61CSv8h4xjLPsDxvAKdv86vUaOAXcSmWalcxyypUdI/qqLcQnIHixek2pagOA1sCJuDkNqkqLdSTGcOgODySEvWyzJkmODXDGdZ/j3RfbP48bOJq0SUoU4nlOOndVA6eK4lRKV9NGaXZUc5LGcZ60yYy5GKiSimzAsQHOoNSzEZYojuOOx4XYJhV3kwKOLj3zyjWrlD3UwKnKgej+yu74QZ9ybv3LJIAzHIjLz+HoxvMoYf88dlaROOo8yvJoeXGcqss6Ea8qq78pCzghwQ3nfFYhV6qyP6f+ZRLA0VTUXb0gSmdwKreUk9CtuihyfxXgmNiDWbaZSTwtb+4TAU6CaoWROnBSjMkIpJnsDNvAGaUXSc9SM9ib6ezkdnGYgqgKcEzswakHTqpAqwA4QkhRaYUCtNxaW5vA0WtgqiRJU+65EGYholwFOFXKWk02pAm4rUucPPRnqaq8hTeNk9gCTvQ+acUJe7jK7IQsxg4lCscETxXgqJ0QZepnaoGjhuhVbyQLOJF0kh6gWXWxTEWvDeDooKlaEKVFf9X6ll1y6PKo7cimwEkZ6AY21lQCp4iIPK9KNUbjgi8VfEUdBeMCJ1JPstiDbtGKVXRZkifVBzWG2jIFTtUO06kETlHsJQ84KdtCTyIChaUL4wAnq7bFhjs9VNI5InhMgZPqETfIm00dcFS1k9VqWhTH6XntsD5ZDFKpx1FOWShpr0nOpDPudYrmKefYhU38tiSNKn0ywVPSKqRLLxPgpLxAw+j11AGnTGQWAUekDvu8JTWz6g4qa3yrKnEyanWtqKfMSHlU2xK348YANSnLNInj6IHKsoq9qXTHyxKCkeuddAnkWf5aHKVay2tJk1zOoQjGxdkmLmqmzaMcURJdNzrjpkzi6BWDpv3gk5A4g4OV0P8mdf73/yqMihZcxH+obiTflOSuHMhJEpLDSlRDFnA0VWcUCzGVOHpgb2B2VGsHqcKPIbWjpE/ia2USogg4WnS7UrG6DeCkDlaKj3ILfOcHJ16//8+qjAqlDjk35FiNuL0iq/OhKEaSAMHArQzFuUE+K6Yj2aFSm2xQxV+V/rL7I7dfWqPPmESX84CT0U9VqQfcBnBSR7ntrbY/IMKPGHxpprNzu4wRJtdTbazyQFR0XdS3E+6mAOtl7RlVgRMf+WZyDJoJbaPcU2UORRJnME7/htQ/Vy3Iz+pyqErL3lr7IjFuDw6PPNi9b7U63V9UHSxTv6+0F6hJYYxk1ECYjXnUY9jlQOq42ocrc882HJIobn1Atl0+P1GjfemdfrqJQHDS9AM+OziS35t7B6CXCbjtdrq5RVlPFCdqYipxoO+1pVHwpeRIfnm6/ghIJR4eu5ujL8jIOdXpj4AIJ/ZW518m4rfrzw4dO1wUEpz67BDTlZnl7XflgaIPnb3nB41O/aGz4wmk8ENnju8x8LPwxFvwNbez82bMjdJPK0Ka4Al/CiQ1cGrnPi2ifzxZ+WRTzTfgPvpi7rTToAXi8Kt4YusOPq3ItDizvC3aKPkVfMw18ACSs3WdJ5tlNXU5HAgAvuWz0zH6mKs6SOrz0cALTPQdgN2a1U8iB6hPzP8NgI8c0F999m8VHdj0FapPNJr7H28bAAAAAElFTkSuQmCC) no-repeat;
                    background-size: contain;
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: -15px;
                    left: 0;
                    width: 35px;
                    height: 14px;
                }
            }
        }
        > div:nth-child(2) {
            width: 114px;
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 500;
            color: #fa8919; 
            background: linear-gradient(135deg, rgba(250,137,25,0.2), rgba(255,165,75,0.2));
            > div:first-child {
                font-size: 16px;
                font-weight: 500;
            }
            > div:last-child {
                margin-top: -5px;
                font-size: 12px;
                font-weight: 500;
                transform: scale(0.9);
                > span:first-child {
                    margin: 0 2px;
                } 
            }
        }
        > div:last-child {
            width: 114px;
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fefefe;
            background: #fa8919;
            > div:first-child {
                font-size: 16px;
                font-weight: 500;
            }
            > div:last-child {
                margin-top: -5px;
                font-size: 12px;
                font-weight: 500;
                transform: scale(0.9);
                > span:first-child {
                    margin: 0 2px;
                } 
            }
        }
    }
`