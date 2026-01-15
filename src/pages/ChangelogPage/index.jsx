import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadingLayout from '../../components/ReadingLayout'
import ChangelogHeader from '../../components/ChangelogHeader';
import ChangelogGroup from '../../components/ChangelogGroup';
import ChangelogDivider from '../../components/ChangelogDivider';
import ChangelogFooter from '../../components/ChangelogFooter';

import { changelogData } from '../../data/changelog';

export default function Changelog() {

    return (
        <>
            <Navbar />

            <div className="bg-bg-main">
                <ReadingLayout>
                    <div 
                        className="
                            bg-bg-surface
                            rounded-lg
                            px-6 py-10
                            md:px-10
                            max-w-3xl
                            mx-auto
                    ">
                        <ChangelogHeader />
                    {changelogData.map((group, index) => (
                        <div key={index}>
                            <ChangelogGroup 
                                period={group.period} 
                                entries={group.entries} 
                            />
                            
                            {index < changelogData.lengh -1 && (
                                <ChangelogDivider />
                            )}
                        </div>
                    ))}

                    <ChangelogFooter />
                    </div>
            </ReadingLayout>
            </div>

            <Footer />
        </>
    );
}