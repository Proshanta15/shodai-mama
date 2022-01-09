import React from 'react'
import slider from '../../images/slider/slider.jpg'
import preorder from '../../images/preorder/preorder.jpg'
import { BiChevronRight } from 'react-icons/bi';
import { SdataFresh } from './SdataFresh';
import ItemCard from './ItemCard';
import { SdataRegular } from './SdataRegular';
import RegularCard from './RegularCard';
import ShodaiCatCard from './ShodaiCatCard';
import { SdataShodaiCat } from './SdataShodaiCat';
import WhyShodai from './WhyShodai';
import { SdataWhyShodai } from './SdataWhyShodai';

const RightPart = () => {
    return (
        <>
        <div className="right_part">
            <div className="top_category">
                <ul>
                    <li><a href="#">Fresh</a></li>
                    <li><a href="#">Regular</a></li>
                    <li><a href="#">Preorder</a></li>
                </ul>
            </div>
            <div className="slider">
                <img src={slider} alt="slider" />
            </div>
            <div className="preorder">
                <div className="all_title">
                    <div className="all_border"></div>
                    <h4>Preorder</h4>
                    <p>বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।</p>
                </div>
                <div className="preorder_list">
                    <a className='preorder_item' href="#">
                        <div className="preorder_img">
                            <img src={preorder} alt="preorder" />
                        </div>
                        <div className="preorder_title">
                            <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p>
                            <p><BiChevronRight className='pre_icon'/></p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="same_title">
                <div className="all_title">
                    <div className="all_border"></div>
                    <h4>Fresh</h4>
                    <p>গুনগত মান বজায় রাখার জন্য পচনশীল খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।</p>
                </div>
            </div>

            <div className="same_item">
                {
                    SdataFresh.map((val, index) => {
                        return (
                            <ItemCard 
                            key={index}
                            quality={val.quality}
                            image={val.image}
                            title={val.title}
                            each={val.each}
                            tk={val.tk}
                            delivery={val.delivery}
                            />
                        )
                    })
                }
                <div className="show_btn">
                    <a href="#">Show More</a>
                </div>
                
            </div>

            <div className="same_title">
                <div className="all_title">
                    <div className="all_border"></div>
                    <h4>Regular</h4>
                    <p>২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল ১০টা-রাত ১০টা পর্যন্ত ।</p>
                </div>
            </div>
            
            <div className="same_item">
                {
                    SdataRegular.map((val, index) => {
                        return (
                            <RegularCard 
                            key={index}
                            quality={val.quality}
                            image={val.image}
                            title={val.title}
                            each={val.each}
                            tk={val.tk}
                            delivery={val.delivery}
                            />
                        )
                    })
                }
                <div className="show_btn">
                    <a href="#">Show More</a>
                </div>
                
            </div>


            <div className="sodai_title">
            <div className="title">
                    <h1>Shodaimama Categories</h1>
                </div>
            </div>

            <div className="shodai_category">             
                <div className="cat_items">
                    {
                        SdataShodaiCat.map(( val, index) =>{
                            return(
                                <ShodaiCatCard 
                                    key={index}
                                    image={val.image}
                                    title={val.title}
                                />
                            )
                        })
                    }
                        
                </div>
               
               
            </div>

            <div className="sodai_title">
            <div className="title">
                    <h1>Why ShodaiMama</h1>
                </div>
            </div>
            <div className="why_shodai">
                {
                    SdataWhyShodai.map(( val, index) => {
                        return(
                            <WhyShodai 
                                key={index}
                                image={val.image}
                                title={val.title}
                                description={val.description}
                            />
                        )
                    })
                }
            </div>
        </div>
            
        </>
    )
}

export default RightPart
