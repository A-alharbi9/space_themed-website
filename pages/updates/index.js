import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import truncateString from '../../utils/truncateString';

function index() {
    const visiblePosts = 3;

    const [totalPosts, setTotalPosts] = useState([]);
    const [visiblePostsState, setVisiblePostsState] = useState(visiblePosts);

    const postTestData = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "Despite this agreement, there is still a lot of difference of opinion concerning what the exact nature of mind is and various competing definitions have been proposed.[2] Philosophical definitions of mind usually proceed not just by listing various types of phenomena belonging to the mind but by searching the 'mark of the mental': a feature that is shared by all mental states and only by mental states.[16][15] Epistemic approaches define mental states in terms of the privileged epistemic access the subject has to these states. This is often combined with a consciousness-based approach, which emphasizes the primacy of consciousness in relation to mind. Intentionality-based approaches, on the other hand, see the power of minds to refer to objects and represent the world as being a certain way as the mark of the mental. According to behaviorism, whether an entity has a mind only depends on how it behaves in response to external stimuli while functionalism defines mental states in terms of the causal roles they play. The differences between these diverse approaches are substantial since they result in very different answers to questions like whether animals or computers have minds.",
            image: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "The mind is the set of faculties responsible for mental phenomena. Often the term is also identified with the phenomena themselves.[2][3][4] These faculties include thought, imagination, memory, will and sensation. They are responsible for various mental phenomena, like perception, pain experience, belief, desire, intention and emotion. Various overlapping classifications of mental phenomena have been proposed. Important distinctions group them together according to whether they are sensory, propositional, intentional, conscious or occurrent. Minds were traditionally understood as substances but it is more common in the contemporary perspective to conceive them as properties or capacities possessed by humans and higher animals. Various competing definitions of the exact nature of the mind or mentality have been proposed. Epistemic definitions focus on the privileged epistemic access the subject has to these states. Consciousness-based approaches give primacy to the conscious mind and allow unconscious mental phenomena as part of the mind only to the extent that they stand in the right relation to the conscious mind. According to intentionality-based approaches, the power to refer to objects and to represent the world is the mark of the mental. For behaviorism, whether an entity has a mind only depends on how it behaves in response to external stimuli while functionalism defines mental states in terms of the causal roles they play. Central questions for the study of mind, like whether other entities besides humans have minds or how the relation between body and mind is to be conceived, are strongly influenced by the choice of one's definition.",
            image: 'https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "Epistemic approaches emphasize that the subject has privileged access to all or at least some of their mental states.[15][18][22] It is sometimes claimed that this access is direct, private and infallible. Direct access refers to non-inferential knowledge. When someone is in pain, for example, they know directly that they are in pain, they do not need to infer it from other indicators like a body part being swollen or their tendency to scream when it is touched.[15] But we arguably also have non-inferential knowledge of external objects, like trees or cats, through perception, which is why this criterion by itself is not sufficient. Another epistemic privilege often mentioned is that mental states are private in contrast to public external facts.[15][22] For example, the fallen tree lying on a person's leg is directly open to perception by the bystanders while the victim's pain is private: only they know it directly while the bystanders have to infer it from their screams. It was traditionally often claimed that we have infallible knowledge of our own mental states, i.e. that we cannot be wrong about them when we have them.[15] So when someone has an itching sensation, for example, they cannot be wrong about having this sensation. They can only be wrong about the non-mental causes, e.g. whether it is the consequence of bug bites or of a fungal infection. But various counterexamples have been presented to claims of infallibility, which is why this criterion is usually not accepted in contemporary philosophy. One problem for all epistemic approaches to the mark of the mental is that they focus mainly on conscious states but exclude unconscious states. A repressed desire, for example, is a mental state to which the subject lacks the forms of privileged epistemic access mentioned.",
            image: 'https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "One way to respond to this worry is to ascribe a privileged status to conscious mental states. On such a consciousness-based approach, conscious mental states are non-derivative constituents of the mind while unconscious states somehow depend on their conscious counterparts for their existence.[16][22][23] An influential example of this position is due to John Searle, who holds that unconscious mental states have to be accessible to consciousness to count as 'mental' at all.[24] They can be understood as dispositions to bring about conscious states.[25] This position denies that the so-called 'deep unconscious', i.e. mental contents inaccessible to consciousness, exists.[26] Another problem for consciousness-based approaches, besides the issue of accounting for the unconscious mind, is to elucidate the nature of consciousness itself. Consciousness-based approaches are usually interested in phenomenal consciousness, i.e. in qualitative experience, rather than access consciousness, which refers to information being available for reasoning and guiding behavior.[16][27][28] Conscious mental states are normally characterized as qualitative and subjective, i.e. that there is something it is like for a subject to be in these states. Opponents of consciousness-based approaches often point out that despite these attempts, it is still very unclear what the term 'phenomenal consciousness' is supposed to mean.[16] This is important because not much would be gained theoretically by defining one ill-understood term in terms of another. Another objection to this type of approach is to deny that the conscious mind has a privileged status in relation to the unconscious mind, for example, by insisting that the deep unconscious exists.",
            image: 'https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                'Intentionality-based approaches see intentionality as the mark of the mental.[15][16][18] The originator of this approach is Franz Brentano, who defined intentionality as the characteristic of mental states to refer to or be about objects.[29][30] One central idea for this approach is that minds represent the world around them, which is not the case for regular physical objects.[18][31] So a person who believes that there is ice cream in the fridge represents the world as being a certain way. The ice cream can be represented but it does not itself represent the world. This is why a mind is ascribed to the person but not to the ice cream, according to the intentional approach.[15] One advantage of it in comparison to the epistemic approach is that it has no problems to account for unconscious mental states: they can be intentional just like conscious mental states and thereby qualify as constituents of the mind.[32] But a problem for this approach is that there are also some non-mental entities that have intentionality, like maps or linguistic expressions.[15][33] One response to this problem is to hold that the intentionality of non-mental entities is somehow derivative in relation to the intentionality of mental entities. For example, a map of Addis Ababa may be said to represent Addis Ababa not intrinsically but only extrinsically because people interpret it as a representation.[32][34] Another difficulty is that not all mental states seem to be intentional. So while beliefs and desires are forms of representation, this seems not to be the case for pains and itches, which may indicate a problem without representing it.[30][33] But some theorists have argued that even these apparent counterexamples should be considered intentional when properly understood.',
            image: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "Behaviorist definitions characterize mental states as dispositions to engage in certain publicly observable behavior as a reaction to particular external stimuli.[37][38] On this view, to ascribe a belief to someone is to describe the tendency of this person to behave in certain ways. Such an ascription does not involve any claims about the internal states of this person, it only talks about behavioral tendencies.[38] A strong motivation for such a position comes from empiricist considerations stressing the importance of observation and the lack thereof in the case of private internal mental states. This is sometimes combined with the thesis that we could not even learn how to use mental terms without reference to the behavior associated with them.[38] One problem for behaviorism is that the same entity often behaves differently despite being in the same situation as before. This suggests that explanation needs to make reference to the internal states of the entity that mediate the link between stimulus and response.[39][40] This problem is avoided by functionalist approaches, which define mental states through their causal roles but allow both external and internal events in their causal network.[41][42][17] On this view, the definition of pain-state may include aspects such as being in a state that 'tends to be caused by bodily injury, to produce the belief that something is wrong with the body and ... to cause wincing or moaning'",
            image: 'https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                'The mental phenomena brought about by the faculties of the mind have been categorized according to various distinctions. Important distinctions group mental phenomena together according to whether they are sensory, qualitative, propositional, intentional, conscious, occurrent or rational. These different distinctions result in overlapping categorizations. Some mental phenomena, like perception or bodily awareness, are sensory, i.e. based on the senses.[47] These phenomena are of special interest to empiricists, who hold that they are our only source of knowledge about the external world.[48] They are contrasted with non-sensory phenomena like thoughts or beliefs, which do not involve sense impressions.[49] Sensory states are closely related to qualitative states, which have qualia and are therefore associated with a subjective feeling of what it is like to be in this state.[18] Sensory and qualitative states are often contrasted with propositional states, which are sometimes said to be non-sensory and non-qualitative.[18][22] Propositional states involve attitudes, like belief or desire, which a subject has towards a proposition. One problem with this contrast is that some propositional attitudes may have a subjective feeling to them, which would make them qualitative phenomena.[50][51] This is the case, for example, when actively desiring something. Another problem with this contrast is that some mental phenomena, like perceptions, are both sensory and propositional.[52][53] Propositional attitudes are intentional states, which have as their characteristic that they refer to or are about objects or states of affairs.[29][30] Some philosophers see intentionality as the mark of the mental, i.e. as what is shared by all and only by mental phenomena. Opponents of this position have argued that there are various mental phenomena, like pains and itches, that lack the representational aspect associated with intentionality and therefore count as non-intentional.[54][55] This claim is sometimes even extended to all sensory phenomena. It sometimes held that all intentional states are propositional. While this is true for the paradigmatic cases, it has been argued that there is a form of object-directed intentionality, like the fear of snakes, that does not involve propositional attitudes, like the fear that one will be bitten by snakes.',
            image: 'https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            postBody:
                "Another important distinction among mental states is whether they are conscious or not. Often two types of consciousness are distinguished: phenomenal consciousness and access consciousness.[27][58] Phenomenal consciousness refers to actual experience. A common view is that some states, like sensations or pains, are necessarily associated with phenomenal consciousness while other states, like beliefs and desires, can be present both with and without phenomenal consciousness.[59][60] According to some views, conscious mental states are more basic while unconscious states only count as mental if they can arise in phenomenal consciousness.[16][22][23] Access consciousness, on the other hand, refers to mental states that are accessible: they carry information that is available for reasoning and guiding behavior.[27][58][16] This notion is closely related to occurrent mental states, which are not just accessible but also currently active or causally efficacious within the owner's mind. All phenomenally conscious mental states are occurrent but there may also be unconscious occurrent states, like repressed desires, that influence our behavior.[61][62][63][64][65] Occurrent mental states contrast with standing or dispositional mental states, which are part of the subject's mind even though they currently play no role in it.[63][65] Mental phenomena are rational if they are well justified or obey the norms of rationality. Irrational mental phenomena, on the other hand, violate these norms. But not all mental phenomena are rationally evaluable: some are arational and exist outside the domain of rationality. They include urges, dizziness or hunger while beliefs and intentions are the paradigmatic examples of rationally evaluable states.[66][67] Some hold that rationality depends only on structural principles that govern how different mental states should relate to each other while others define rationality in terms of responding correctly to reasons.",
            image: 'https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
    ];

    useEffect(() => {
        setTotalPosts(postTestData);
    }, []);

    return (
        <div>
            <Head>
                <title>Updates | Atlacore</title>
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)',
                }}
                className="flex flex-col justify-around bg-repeat-round"
            >
                <div className="flex flex-col justify-around h-screen bg-gradient-to-b from-purple-600/50 via-black/70 to-pink-800/50">
                    <div className="flex flex-col items-center justify-center w-full py-8 lg:justify-start">
                        <div className="flex flex-col items-center justify-center text-white">
                            <p className="text-5xl font-bold xl:text-6xl">Updates</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full px-4 my-10 text-center text-white md:px-5">
                            <p className="w-full font-thin md:text-xl xl:text-2xl lg:w-3/4">
                                Check our latest updates and statements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300">
                {totalPosts.slice(0, visiblePostsState).map((post, ind) => (
                    <div
                        className={`flex flex-col lg:flex-row lg:py-8 ${
                            ind + 1 < totalPosts.length &&
                            'border-solid border-slate-400 border-b-2'
                        } lg:px-5 xl:px-0`}
                    >
                        <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                            <img
                                className="w-full lg:w-[30rem] h-64 lg:h-72 lg:rounded-md"
                                src={post.image}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center lg:w-1/2 xl:w-[45%]">
                            <div>
                                <p className="my-6 text-3xl font-bold text-center lg:my-0">
                                    {post.title}
                                </p>
                                <div className="px-2 mb-8 text-gray-800 lg:text-sm lg:mt-4 lg:mb-3">
                                    <p className="text-left">{truncateString(post.postBody, 90)}</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <Link href="/updates/article">
                                    <button
                                        type="button"
                                        className="px-5 py-2 text-white transition duration-200 rounded-md bg-amber-600 hover:bg-amber-800"
                                    >
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                {visiblePostsState < totalPosts.length && (
                    <div className="flex justify-center py-8">
                        <button
                            type="button"
                            className="px-8 py-2 text-white transition duration-200 bg-green-400 rounded-md outline-none hover:bg-green-600"
                            onClick={() =>
                                setVisiblePostsState((prevState) => prevState + visiblePosts)
                            }
                        >
                            Load more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default index;
