import { Grid, Box, Typography, Modal } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

//Icons
import { PlusIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Portfolio/Work.styles";

const Work = ({ works }) => {
    const [open, setOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);

    const handleOpen = (work) => {
        setSelectedWork(work);
        console.log('work ', work)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedWork(null);
    };

    return (
        <Grid container rowSpacing={6} columnSpacing={{ xxl: 45, md: 22, smd: 10, lsm: 8, msm: 4, sm: 2, xxs: 2 }}>
            {works &&
                works.map((work, i) => (
                    <Grid item sm={6} xxs={12} key={i}>
                        <Box sx={{
                            ...styles.ImageContainer,
                            marginLeft: {
                                lsm: `${i % 2 ? "unset" : "auto"}`,
                                sm: "unset"
                            }
                        }}>
                            <Box sx={styles.ImageBox} onClick={() => handleOpen(work)}>
                                <Box component="img" src={work.image} />
                                <Box className="css-mui-svg">
                                    <PlusIcon />
                                </Box>
                            </Box>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={styles.WorkTitle}
                            >
                                {/* {work.name} */}
                            </Typography>
                        </Box>
                    </Grid>
                ))
            }

            <Modal open={open} onClose={handleClose}>
                <Box sx={styles.ModalStyle}>
                    {selectedWork && (
                        <>
                            <Typography variant="h4" sx={styles.titleStyle}>{selectedWork.name}</Typography>
                            <Box component="img" src={selectedWork.image} alt={selectedWork.name} sx={{ width: "100%", marginBottom: 2 }} />
                            <Typography variant="body1"><strong>Description:</strong><br /> {selectedWork.description}</Typography>
                            <br />
                            <Typography variant="body1"><strong>URL: </strong> 
                                <Link href={selectedWork.url} target="_blank" rel="noreferrer">
                                    {selectedWork.url}
                                </Link>
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </Grid>
    );
};
export default Work;
